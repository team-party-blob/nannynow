import User from '../models/User';
import { HttpError } from './error';

const requireAuth = (req, res, next) => {
  console.log('req token', req.token);
  const token = req.token;
  if(!token) {
    next(
      new HttpError({
        code: 401,
        message: 'Missing token'
      })
    );
    return;
  }

  User.findByToken(token).then(user => {
    if(user) {
      req.user = user;
      next();
    } else {
      next(
        new HttpError({
          code: 401,
          message: 'Invalid token'
        })
      );
    }
  });
};

export default requireAuth;
