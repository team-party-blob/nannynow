import { Router } from 'express';
import { Types } from 'mongoose';
import Appointment from '../../models/Appointment';
import User from '../../models/User';
import requireAuth from '../../middleware/requireAuth';
import RequestedAppointment from '../../models/RequestedAppointment';
import { HttpError } from '../../middleware/error';
import { hourDiff } from '../../utils/dateHelpers';

export default Router()
  .post('/', requireAuth(['admin', 'nanny']), async(req, res, next) => {
    // You can't trust the values the request gives you. Make sure to check that the information makes sense
    const {
      arrivalTime,
      departureTime,
      familyId,
      nannyId,
      requestId,
    } = req.body;

    // What if the request if for the wrong agency?
    // Let's make sure the request exists and is for our agency.
    const request = await RequestedAppointment.findOne({ _id: Types.ObjectId(requestId), agency: req.user.agency });
    if(!request) {
      return next(new HttpError({ code: 400, message: 'Invalid RequestedAppointment' }));
    }

    // Let's make sure that the nanny that we are making an appointment for has accepted
    // the request
    const requestedNanny = request.requestedNannies.find(nannyStatus => nannyStatus.status === 'accepted');
    if(!requestedNanny || requestedNanny.nanny !== Types.ObjectId(nannyId)) {
      return next(new HttpError({ code: 400, message: 'Invalid nanny for Appointment' }));
    }

    let nannyProfile;
    if(req.user.role === 'nanny') {
      nannyProfile = await req.user.getProfile();
    } else {
      nannyProfile = await User.findById(nannyId).then(user => user.getProfile());
    }

    const agency = await req.user.getAgency();

    const agencyFeePerHour = agency.hourlyFee;
    const nannyPricePerHour = nannyProfile.pricePerHour;

    // We should calculate the fees on the back-end
    const projectedAgencyPayment = agencyFeePerHour * request.requestedHours();
    const projectedNannyPayment = nannyPricePerHour * request.requestedHours();

    const finalAgencyPayment = agencyFeePerHour * hourDiff(arrivalTime, departureTime);
    const finalNannyPayment = nannyPricePerHour * hourDiff(arrivalTime, departureTime);

    Appointment.create({
      arrivalTime,
      departureTime,
      family: familyId,
      agency: req.user.getAgencyId(),
      nanny: req.user.role === 'nanny' ? req.user._id : nannyId,
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

  // make sure to use auth. Users should only be able to get their appointments
  .get('/', requireAuth(['admin', 'family', 'nanny']), (req, res, next) => {
    Appointment.findForUser(req.user)
      .lean()
      .then(appointments => res.json(appointments))
      .catch(next);
  })

  // make sure to use auth. Users should only be able to get their appointments
  .get('/:id', requireAuth(['admin', 'family', 'nanny']), (req, res, next) => {
    const { id } = req.params;
    Appointment.findForUser(req.user, { _id: Types.ObjectId(id) })
      .lean()
      .then((request = []) => res.json(request[0] || null))
      .catch(next);
  })

  .get('/detail/:appointmentId', requireAuth(['admin', 'family', 'nanny']), (req, res, next) => {
    const { appointmentId } = req.params;
    Appointment.findForUser(req.user, { _id: Types.ObjectId(appointmentId) })
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

  .delete('/:id', requireAuth(['admin', 'family', 'nanny']), (req, res, next) => {
    const { id } = req.params;
    Appointment.findForUser(req.user, { _id: Types.ObjectId(id) })
      .then(appointment => Appointment.findByIdAndDelete(appointment._id))
      .then(appointment => res.json({ removed: !!appointment }))
      .catch(next);
  })

  .put('/:id', requireAuth(['admin']), (req, res, next) => {
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
