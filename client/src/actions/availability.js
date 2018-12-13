import { updateAvailability as postAvailability } from '../services/availabilityApi.js';
import { getAvailability as fetchAvailability } from '../services/availabilityApi';
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

export const AVAILABILITY_FETCH = 'AVAILABILITY_FETCH';
export const AVAILABILITY_FETCH_ERROR = 'AVAILABILITY_FETCH_ERROR';

export const getAvailability = userId => ({
  type: AVAILABILITY_FETCH,
  loadStart: LOAD_START,
  loadEnd: LOAD_END,
  errorType: AVAILABILITY_FETCH_ERROR,
  payload: fetchAvailability(userId)
});
