import { Router } from 'express';
import RequestedAppointment from '../../models/RequestedAppointment';
import User from '../../models/User';

export default Router()
  .post('/', (req, res, next) => {
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

  .get('/user/:userId', (req, res, next) => {
    const { userId } = req.params;

    User.findById(userId)
      .then(user => {
        if (user.role === 'family') {
          RequestedAppointment.find({ family: user._id, closed: false })
            .lean()
            .sort()
            .then(response => res.json(response))
            .catch(next);
        } else if (user.role === 'nanny') {
          RequestedAppointment.find({
            'requestedNannies.nanny': user._id,
            closed: false
          })
            .lean()
            .sort()
            .then(response => res.json(response))
            .catch(next);
        } else if (user.role === 'admin' || user.role === 'developer') {
          RequestedAppointment.find({})
            .lean()
            .sort()
            .then(response => res.json(response))
            .catch(next);
        }
      })
      .catch(next);
  })

  .get('/detail/:requestId', (req, res, next) => {
    /* eslint-disable-next-line */
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
        requestedNannies
      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .patch('/status/:requestId', (req, res, next) => {
    const { requestId } = req.params;
    const { nannyId, status, closed } = req.body;
    RequestedAppointment.updateOne(
      { _id: requestId, 'requestedNannies.nanny': nannyId },
      { $set: { closed, 'requestedNannies.$.status': status } }
    )
      .then(response => res.json(response))
      .catch(next);
  });
