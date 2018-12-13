import { post } from './request';

export const createFamilyRequest = request => {
  return post('/api/requests', request);
};
