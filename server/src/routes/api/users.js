import { Router } from 'express';
import User from '../../models/User';
import { HttpError } from '../../middleware/error';
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
  })

  .put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { email, password, role, agency } = req.body;

    User.findByIdAndUpdate(id, { email, password, role, agency }, { new: true })
      .select({ __v: false })
      .lean()
      .then(user => res.json(user))
      .catch(next);
  })

  .post('/signin', (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .then(user => {
        const correctPassword = user && user.compare(password);
        
        if(correctPassword) {
          const token = user.authToken();
          res.json({ token });
        } else {
          next(
            new HttpError({
              code: 401,
              message: 'Bad email or password'
            })
          );
        }
      })
      .catch(next);
  });
