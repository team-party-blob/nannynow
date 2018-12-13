import { Router } from 'express';
import NannyProfile from '../../models/NannyProfile';
import AvailableTime from '../../models/AvailableTime';


export default Router()
  .post('/', (req, res, next) => {
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
    NannyProfile.find()
      .lean()
      .then(nannies => res.json(nannies))
      .catch(next);
  })
  .get('/search', (req, res, next) => {
    const { start, end } = req.query;
    // let startDate = new Date(start).toISOString();
    AvailableTime.find({
      availableStartTime: {
        $gte: start
      }
    })
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    NannyProfile.findById(id)
      .then(nannies => res.json(nannies))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;

    NannyProfile.findByIdAndDelete(id)
      .then(results => res.json({ removed: !!results }))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
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
