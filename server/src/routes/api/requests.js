import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';

export default Router()
  .post('/', (req, res, next) => {
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
  })

  .get('/', (req, res, next) => {
    RequestedAppointment.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    RequestedAppointment.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
