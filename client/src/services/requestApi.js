import { post, get } from './request';

export const createFamilyRequest = request => {
  return post('/api/requests', request);
};

export const fetchFilteredNannies = query => {
  return get('/api/nannies/search', query);
};

export const getRequests = userId => {
  return get(`/api/requests/user/${userId}`);
};

export const getRequest = requestId => {
  return get(`/api/requests/detail/${requestId}`);
};
