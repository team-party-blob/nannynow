import { Router } from 'express';
import Appointment from '../../models/Appointment';
import FamilyProfile from '../../models/FamilyProfile';
import User from '../../models/User';

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
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Appointment.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/user/:userId', (req, res, next) => {
    const { userId } = req.params;
    User.findById(userId)
      .then(user => user.getProfile())
      .then(profile => {
        Appointment.find({ user: profile._id })
      })

    
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
