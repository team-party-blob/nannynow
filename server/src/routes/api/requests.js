import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';

export default Router().post('/', (req, res, next) => {
  const {
    startDateTime,
    endDateTime,
    birthdays,
    appointmentComments,
    description,
    family,
    agency,
    requestedNannies,
    createdDate
  } = req.body;

  RequestedAppointment.create({
    startDateTime,
    endDateTime,
    birthdays,
    appointmentComments,
    description,
    family,
    agency,
    requestedNannies,
    createdDate
  })
    .then(request => res.json(request))
    .catch(next);
});
