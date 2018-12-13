import { get } from './request';

export const getNanny = id => {
  return get(`/api/nannies/${id}`);
};
