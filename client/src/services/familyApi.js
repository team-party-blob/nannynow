import { get } from './request';

export const getFamily = id => {
  return get(`/api/families/${id}`);
};
