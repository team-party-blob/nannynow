import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';
import User from '../../models/User';

export default Router()
  .post('/', (req, res, next) => {
    // only admins and families
    // don't trust request object.
    // Get agency from user object
    // get family from user object
    let {
      startDateTime,
      endDateTime,
      birthdays,
      appointmentComments,
      family,
      agency,
      requestedNannies
    } = req.body;

    startDateTime = new Date(startDateTime);
    endDateTime = new Date(endDateTime);

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
    // only admins, families, and nannies.
    // only return RequestedAppointments that the user
    // is allowed to see
    RequestedAppointment.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    // only admins, families, and nannies.
    // only return RequestedAppointments that the user
    // is allowed to see
    const { id } = req.params;
    RequestedAppointment.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/detail/:requestId', (req, res, next) => {
    // only admins, families, and nannies.
    // only return RequestedAppointments that the user
    // is allowed to see
    const { requestId } = req.params;
    RequestedAppointment.findById(requestId)
      .populate('family')
      .populate('requestedNannies.nanny')
      .then(request => {
        return Promise.all([
          Promise.resolve(request),
          request.family.getProfile(),
          Promise.all(
            request.requestedNannies.map(requestedNanny =>
              requestedNanny.nanny.getProfile()
            )
          )
        ]);
      })
      .then(([request, familyProfile, requestedNannyProfiles]) => {
        res.json({
          request,
          familyProfile,
          requestedNannyProfiles
        });
      })
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    // only admins
    const { id } = req.params;
    RequestedAppointment.findByIdAndDelete(id)
      .then(request => res.json({ removed: !!request }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    // only admins
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
        requestedNannies

      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .patch('/status/:requestId/:nannyId/:status', (req, res, next) => {
    // only admins and nannies.
    const { requestId, nannyId, status } = req.params;
    RequestedAppointment.updateOne({ _id: requestId, 'requestedNannies.nanny': nannyId }, { $set: { 'requestedNannies.$.status': status } })
      .then(response => res.json(response))
      .catch(next);
  });
