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
      nannyPricePerHour,
      projectedNannyPayment,
      projectedAgencyPayment,
      finalNannyPayment,
      finalAgencyPayment
    } = req.body;

    Appointment.create({
      arrivalTime,
      departureTime,
      family,
      agency,
      nanny,
      request,
      agencyFeePerHour,
      nannyPricePerHour,
      projectedNannyPayment,
      projectedAgencyPayment,
      finalNannyPayment,
      finalAgencyPayment
    })
      .then(appointment => res.json(appointment))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Appointment.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Appointment.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Appointment.findByIdAndDelete(id)
      .then(request => res.json({ removed: !!request }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
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

    Appointment.findByIdAndUpdate(
      id,
      {
        arrivalTime,
        departureTime,
        family,
        agency,
        nanny,
        request,
        agencyFeePerHour,
        nannyPricePerHour
      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
