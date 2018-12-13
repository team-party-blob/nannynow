import { updateAvailability as postAvailability } from '../services/availabilityApi.js';
import { LOAD_START, LOAD_END } from './fixtures/loadingActions.js';

export const AVAILABILITY_UPDATE = 'AVAILABILITY_UPDATE';
export const AVAILABILITY_UPDATE_ERROR = 'AVAILABILITY_UPDATE_ERROR';

export const updateAvailability = (start, end, userId) => ({
  type: AVAILABILITY_UPDATE,
  loadStart: LOAD_START,
  loadEnd: LOAD_END,
  errorType: AVAILABILITY_UPDATE_ERROR,
  payload: postAvailability(start, end, userId)
});
