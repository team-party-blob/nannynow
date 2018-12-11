import { Router } from 'express';
import AvailableTimes from '../../models/AvailableTimes';

export default Router().post('/', (req, res, next) => {
  const { availableStartTime, availableEndTime, nanny } = req.body;

  AvailableTimes.create({
    availableStartTime,
    availableEndTime,
    nanny
  })
    .then(availableTime => res.json(availableTime))
    .catch(next);
});
