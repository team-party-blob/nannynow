import { Router } from 'express';
import User from '../../models/User';
import { handler } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/signup', (req, res, next) => {
    const { email, password, role, agency } = req.body;
    User.create({ email, password, role, agency })
      .then(user => res.json(user))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    User.find()
      .select({ __v: false })
      .lean()
      .then(users => res.json(users))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    User.findById(id)
      .select({ __v: false })
      .lean()
      .then(user => res.json(user))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
      .then(user => res.json({ removed: !!user }))
      .catch(next);
  });
