import { post, get } from './request';

export const signUp = ({ email, password, role, agency }) => {
  return post(`/api/users/${agency}/signup`, { email, password, role });
};

export const signIn = ({ email, password }) => {
  return post('/api/users/signin', { email, password });
};

export const verifySession = () => {
  return get('/api/users/verify');
};
