import { fetchRequests } from '../../services/requestApi';

export const FETCH_REQUESTS = 'FETCH_REQUESTS';
export const getRequests = requestId => ({
  type: FETCH_REQUESTS,
  payload: fetchRequests(requestId)
});
