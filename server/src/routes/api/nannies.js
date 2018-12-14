import { Router } from 'express';
import NannyProfile from '../../models/NannyProfile';
import AvailableTime from '../../models/AvailableTime';
import mongoose from 'mongoose';


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
        console.log(matches, nannyProfile);
        res.json({ matches, nannyProfile });
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
