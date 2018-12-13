import { post } from './request';

export const updateAvailability = (availableStartTime, availableEndTime, nanny) => {

  return post('/api/availability', { availableStartTime, availableEndTime, nanny });
};
