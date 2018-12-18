import { Router } from 'express';
import AvailableTime from '../../models/AvailableTime';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/', requireAuth(['admin', 'nanny']), (req, res, next) => {
    // A nanny should only be able to set their availability
    const { availableStartTime, availableEndTime } = req.body;
    let nannyId = req.user._id;
    if(req.user.role === 'admin') {
      nannyId = req.body.nanny;
    }

    AvailableTime.create({
      availableStartTime,
      availableEndTime,
      nanny: nannyId
    })
      .then(availableTime => res.json(availableTime))
      .catch(next);
  })

  .get('/', requireAuth(['admin', 'nanny']), (req, res, next) => {
    // Same as the others. This should require auth and should only return
    // available times for a nanny
    AvailableTime.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    // check auth. Only return if it belongs to the nanny
    const { id } = req.params;
    AvailableTime.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    // Check if this belongs to a nanny
    const { id } = req.params;
    AvailableTime.findByIdAndDelete(id)
      .then(request => res.json({ removed: !!request }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    // check auth
    const { id } = req.params;
    const { availableStartTime, availableEndTime, nanny } = req.body;

    AvailableTime.findByIdAndUpdate(
      id,
      {
        availableStartTime,
        availableEndTime,
        nanny
      },
      { new: true }
    )
      .lean()
      .then(request => res.json(request))
      .catch(next);
  });
