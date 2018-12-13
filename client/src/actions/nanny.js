import { getNanny } from '../services/nannyApi';

export const FETCH_NANNY = 'FETCH_NANNY';
export const FETCH_NANNY_LOAD_START = 'FETCH_NANNY_LOAD_START';
export const FETCH_NANNY_LOAD_END = 'FETCH_NANNY_LOAD_END';
export const FETCH_NANNY_ERROR = 'FETCH_NANNY_ERROR';
export const fetchNanny = id => ({
  type: FETCH_NANNY,
  loadStart: FETCH_NANNY_LOAD_START,
  loadEnd: FETCH_NANNY_LOAD_END,
  errorType: FETCH_NANNY_ERROR,
  payload: getNanny(id)
});
