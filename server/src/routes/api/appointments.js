import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';

export default Router().post('/', (req, res, next) => {
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

  RequestedAppointment.create({
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
});
