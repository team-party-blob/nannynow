import { updateAvailability as postAvailability } from '../services/availabilityApi.js';

export const AVAILABILITY_UPDATE = 'AVAILABILITY_UPDATE';
export const AVAILABILITY_UPDATE_LOAD_START = 'AVAILABILITY_UPDATE_LOAD_START';
export const AVAILABILITY_UPDATE_LOAD_END = 'AVAILABILITY_UPDATE_LOAD_END';
export const AVAILABILITY_UPDATE_ERROR = 'AVAILABILITY_UPDATE_ERROR';

export const updateAvailability = (start, end, userId) => ({
  type: AVAILABILITY_UPDATE,
  loadStart: AVAILABILITY_UPDATE_LOAD_START,
  loadEnd: AVAILABILITY_UPDATE_LOAD_END,
  errorType: AVAILABILITY_UPDATE_ERROR,
  payload: postAvailability(start, end, userId)
});
