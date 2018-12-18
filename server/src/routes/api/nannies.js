import { Router } from 'express';
import NannyProfile from '../../models/NannyProfile';
import AvailableTime from '../../models/AvailableTime';



export default Router()
  .post('/', (req, res, next) => {
    // only admins and nannies
    // don't trust request data. get agency from user model
    const {
      user,
      agency,
      name,
      photo,
      streetAddress1,
      city,
      state,
      zip,
      phone,
      description,
      age,
      pricePerHour,
      createdDate
    } = req.body;

    NannyProfile.create({
      user,
      agency,
      name,
      photo,
      streetAddress1,
      city,
      state,
      zip,
      phone,
      description,
      age,
      pricePerHour,
      createdDate
    })
      .then(nanny => res.json(nanny))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    // only admins
    NannyProfile.find()
      .lean()
      .then(nannies => res.json(nannies))
      .catch(next);
  })

  .get('/search', (req, res, next) => {
    // only admins and families
    const { start, end } = req.query;
    let startDate = Date.parse(start);
    let endDate = Date.parse(end);
    AvailableTime.find({
      availableStartTime: {
        $lte: startDate
      },
      availableEndTime: {
        $gte: endDate
      }
    })
      .populate('nanny')
      .then(matches => {
        return Promise.all([
          Promise.resolve(matches),
          Promise.all(matches.map(match => match.nanny.getProfile()))
        ]);
      })
      .then(([matches, nannyProfile]) => {
        res.json({ matches, nannyProfile });
      })
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    // only admin and owning user
    const { id } = req.params;
    NannyProfile.findById(id)
      .then(nannies => res.json(nannies))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    // only admin and owning user
    const { id } = req.params;

    NannyProfile.findByIdAndDelete(id)
      .then(results => res.json({ removed: !!results }))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    // only admin and owning user
    // don't trust request. get agency from user model
    const { id } = req.params;
    const {
      user,
      agency,
      name,
      photo,
      streetAddress1,
      city,
      state,
      zip,
      phone,
      description,
      age,
      pricePerHour,
      createdDate
    } = req.body;

    NannyProfile.findByIdAndUpdate(
      id,
      {
        user,
        agency,
        name,
        photo,
        streetAddress1,
        city,
        state,
        zip,
        phone,
        description,
        age,
        pricePerHour,
        createdDate
      },
      { new: true }
    )
      .lean()
      .then(nanny => res.json(nanny))
      .catch(next);
  });
