import { Router } from 'express';
import Appointment from '../../models/Appointment';

export default Router()
  .post('/', (req, res, next) => {
    const {
      arrivalTime,
      departureTime,
      family,
      agency,
      nanny,
      request,
      agencyFeePerHour,
      nannyPricePerHour
    } = req.body;

    Appointment.create({
      arrivalTime,
      departureTime,
      family,
      agency,
      nanny,
      request,
      agencyFeePerHour,
      nannyPricePerHour
    })
      .then(appointment => res.json(appointment))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Appointment.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
