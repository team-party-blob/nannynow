import { Router } from 'express';
import AvailableTime from '../../models/AvailableTime';

export default Router()
  .post('/', (req, res, next) => {
    const { availableStartTime, availableEndTime, nanny } = req.body;

    AvailableTime.create({
      availableStartTime,
      availableEndTime,
      nanny
    })
      .then(availableTime => res.json(availableTime))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    AvailableTime.find()
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    AvailableTime.findById(id)
      .lean()
      .then(request => res.json(request))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    AvailableTime.findByIdAndDelete(id)
      .then(request => res.json({ removed: !!request }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
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
