import { put } from './request';

export const updateProfile = (id, profileInfo) => {
  return put(`/api/nannies/${id}`, profileInfo);
};
