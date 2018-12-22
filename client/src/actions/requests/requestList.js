import { getRequests, getRequest, updateNannyRequestStatus } from '../../services/requestApi';
import { LOAD_START, LOAD_END } from '../fixtures/loadingActions';

export const FETCH_REQUESTS = 'FETCH_REQUESTS';
export const FETCH_REQUESTS_LOAD_START = 'FETCH_REQUESTS_LOAD_START';
export const FETCH_REQUESTS_LOAD_END = 'FETCH_REQUESTS_LOAD_END';
export const FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR';
export const fetchRequests = userId => ({
  type: FETCH_REQUESTS,
  loadStart: FETCH_REQUESTS_LOAD_START,
  loadEnd: FETCH_REQUESTS_LOAD_END,
  errorType: FETCH_REQUESTS_ERROR,
  payload: getRequests(userId)
});

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_REQUEST_LOAD_START = 'FETCH_REQUEST_LOAD_START';
export const FETCH_REQUEST_LOAD_END = 'FETCH_REQUEST_LOAD_END';
export const FETCH_REQUEST_ERROR = 'FETCH_REQUEST_ERROR';
export const fetchRequest = requestId => ({
  type: FETCH_REQUEST,
  loadStart: FETCH_REQUEST_LOAD_START,
  loadEnd: FETCH_REQUEST_LOAD_END,
  errorType: FETCH_REQUEST_ERROR,
  payload: getRequest(requestId)
});

export const NANNY_UPDATE_REQUEST_STATUS = 'NANNY_UPDATE_REQUEST_STATUS';
export const updateRequestStatus = (requestId, nannyId, status) => ({
  type: NANNY_UPDATE_REQUEST_STATUS,
  loadStart: LOAD_START,
  loadEnd: LOAD_END,
  payload: updateNannyRequestStatus(requestId, nannyId, status)
});
