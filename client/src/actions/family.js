import { getFamily } from '../services/familyApi';

export const FETCH_FAMILY = 'FETCH_FAMILY';
export const FETCH_FAMILY_LOAD_START = 'FETCH_FAMILY_LOAD_START';
export const FETCH_FAMILY_LOAD_END = 'FETCH_FAMILY_LOAD_END';
export const FETCH_FAMILY_ERROR = 'FETCH_FAMILY_ERROR';
export const fetchFamily = id => ({
  type: FETCH_FAMILY,
  loadStart: FETCH_FAMILY_LOAD_START,
  loadEnd: FETCH_FAMILY_LOAD_END,
  errorType: FETCH_FAMILY_ERROR,
  payload: getFamily(id)
});
