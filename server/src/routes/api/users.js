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
  });
