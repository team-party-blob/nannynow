import { post, get } from './request';

export const signUp = ({ email, password }) => {
  return post('/api/auth/signUp', { email, password });
};

export const signIn = ({ email, password }) => {
  return post('/api/auth/signIn', { email, password });
};

export const verifySession = () => {
  return get('/api/auth/verify');
};
