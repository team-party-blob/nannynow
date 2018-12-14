import { createFamilyRequest as postFamilyRequest, fetchFilteredNannies } from '../../services/requestApi';

export const FAMILY_UPDATE_SEARCH_QUERY = 'FAMILY_UPDATE_SEARCH_QUERY';
export const updateFamilySearchQuery = query => ({
  type: FAMILY_UPDATE_SEARCH_QUERY,
  payload: query
});


export const FAMILY_FETCH_FILTERED_NANNIES = 'FAMILY_FETCH_FILTERED_NANNIES';
export const getFilteredNannies = (start, end) => ({
  type: FAMILY_FETCH_FILTERED_NANNIES,
  payload: fetchFilteredNannies(start, end)
});
export const FAMILY_REQUEST_CREATE = 'FAMILY_REQUEST_CREATE';
export const FAMILY_REQUEST_LOAD_START = 'FAMILY_REQUEST_LOAD_START';
export const FAMILY_REQUEST_LOAD_END = 'FAMILY_REQUEST_LOAD_END';
export const createRequest = request => ({
  type: FAMILY_REQUEST_CREATE,
  loadStart: FAMILY_REQUEST_LOAD_START,
  loadEnd: FAMILY_REQUEST_LOAD_END,
  payload: postFamilyRequest(request)
});
