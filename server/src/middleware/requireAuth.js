import { untokenize } from '../utils/auth';
import { HttpError } from './error';

export const findAuthToken = req => {
  const header = req.get('Authorization');
  if(header) return header.replace(/Bearer\s*/i, '');
  return null;
};

export default roles => (req, res, next) => {
  const token = findAuthToken(req);
  if(!token)
    return next(new HttpError({ code: 401, message: 'Token required' }));

  try {
    const user = untokenize(token);
    if(!roles.some(role => user.role === role)) {
      return next(new HttpError({ code: 403, message: `Invaild ${user.role} required ${roles}` }));
    }
    req.user = user;
    next();
  } catch(e) {
    next(new HttpError({ code: 403, message: 'Invalid token' }));
  }
};
