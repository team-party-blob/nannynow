import { Router } from 'express';
import NannyProfile from '../../models/NannyProfile';

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
      createdDate } = req.body;

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
    NannyProfile
      .find()
      .lean()
      .then(nannies => res.json(nannies))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    NannyProfile
    
  });
