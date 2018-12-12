import { put, post } from './request';

export const updateProfile = (id, profileInfo) => {
  const isFamily = profileInfo.birthdays;
  console.log(profileInfo)
  if(isFamily) return put(`/api/families/${id}`, profileInfo);
  if(!isFamily) return put(`/api/nannies/${id}`, profileInfo);
};

export const createProfile = profileInfo => {
  return post('/api/nannies', profileInfo);
};
