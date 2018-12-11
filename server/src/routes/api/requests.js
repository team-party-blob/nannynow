import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';

export default Router()
  .post('/', (req, res, next) => {
    const {
      startDateTime,
      endDateTime,
      birthdays,
      appointmentComments,
      family,
      agency,
      requestedNannies
    } = req.body;

    RequestedAppointment.create({
      startDateTime,
      endDateTime,
      birthdays,
      appointmentComments,
      family,
      agency,
      requestedNannies
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
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    RequestedAppointment.findByIdAndDelete(id)
      .then(request => res.json({ removed: !!request }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
    const {
      startDateTime,
      endDateTime,
      birthdays,
      appointmentComments,
      family,
      agency,
      requestedNannies
    } = req.body;

    RequestedAppointment.findByIdAndUpdate(
      id,
      {
        startDateTime,
        endDateTime,
        birthdays,
        appointmentComments,
        family,
        agency,
        requestedNannies,
      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
