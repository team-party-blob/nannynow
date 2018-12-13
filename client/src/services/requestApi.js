import { stringify } from 'querystring';
import { post, get } from './request';

export const createFamilyRequest = request => {
  return post('/api/requests', request);
};

export const fetchFilteredNannies = (start, end) => {
  const query = stringify({ start, end });
  console.log('this', query);
  return get(`/api/nannies/search?${query}`);
};
