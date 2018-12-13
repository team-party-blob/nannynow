import { post, get, remove } from './request';

export const updateAvailability = (availableStartTime, availableEndTime, nanny) => {
  return post('/api/availability', { availableStartTime, availableEndTime, nanny });
};

export const fetchAvailability = id => {
  return get(`/api/availability/nanny/${id}`);
};

export const deleteAvailability = id  => {
  return remove(`/api/availability/${id}`);
};
