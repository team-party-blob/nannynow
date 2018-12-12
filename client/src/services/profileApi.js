import { put, post } from './request';

export const updateProfile = (id, profileInfo) => {
  return put(`/api/nannies/${id}`, profileInfo);
};

export const createProfile = profileInfo => {
  return post('/api/nannies', profileInfo);
};
