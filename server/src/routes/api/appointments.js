import { Router } from 'express';
import Appointment from '../../models/Appointment';
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

  .get('/user/:userId', (req, res, next) => {
    const { userId } = req.params;

    User.findById(userId).then(user => {
      if(user.role === 'nanny') {
        Appointment.find({ nanny: user._id })
          .populate({
            path: 'request',
            select: {
              startDateTime: true,
              endDateTime: true,
              appointmentComments: true,
              birthdays: true,
              closed: true
            }
          })
          .lean()
          .then(response => res.json(response))
          .catch(next);
      } else if(user.role === 'family') {
        Appointment.find({ family: user._id })
          .populate({
            path: 'request',
            select: {
              startDateTime: true,
              endDateTime: true,
              appointmentComments: true,
              birthdays: true,
              closed: true
            }
          })
          .lean()
          .then(response => res.json(response))
          .catch(next);
      } else if(user.role === 'admin' || user.role === 'developer') {
        Appointment.find()
          .populate({
            path: 'request',
            select: {
              startDateTime: true,
              endDateTime: true,
              appointmentComments: true,
              birthdays: true,
              closed: true
            }
          })
          .then(response => res.json(response))
          .catch(next);
      }
    });
  })

  .get('/detail/:userId/:appointmentId', (req, res, next) => {
    /* eslint-disable-next-line */
    const { appointmentId, userId } = req.params;
    Appointment.findById(appointmentId)
      .populate({
        path: 'request',
        select: {
          startDateTime: true,
          endDateTime: true,
          appointmentComments: true,
          birthdays: true,
          closed: true
        }
      })
      .populate('family')
      .populate('nanny')
      .then(appointment => {
        return Promise.all([
          Promise.resolve(appointment),
          appointment.family.getProfile(),
          appointment.nanny.getProfile()
        ]);
      })
      .then(([appointment, familyProfile, nannyProfile]) => {
        res.json({ ...appointment.toJSON(), familyProfile, nannyProfile });
      })
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
      nannyPricePerHour,
      projectedNannyPayment,
      projectedAgencyPayment,
      finalNannyPayment,
      finalAgencyPayment
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
        nannyPricePerHour,
        projectedNannyPayment,
        projectedAgencyPayment,
        finalNannyPayment,
        finalAgencyPayment
      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
