import { put, post } from './request';

export const updateProfile = (id, profileInfo) => {
  const isFamily = profileInfo.birthdays;
  if(isFamily) return put(`/api/families/${id}`, profileInfo);
  if(!isFamily) return put(`/api/nannies/${id}`, profileInfo);
};

export const createProfile = profileInfo => {
  const isFamily = profileInfo.birthdays;
  if(isFamily) return post('/api/families', profileInfo);
  if(!isFamily) return post('/api/nannies', profileInfo);
};

