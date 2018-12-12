import { createdFamilyRequest as postFamilyRequest } from '../../services/requestApi';

export const FAMILY_REQUEST_CREATE = 'FAMILY_REQUEST_CREATE';
export const FAMILY_REQUEST_LOAD_START = 'FAMILY_REQUEST_LOAD_START';
export const FAMILY_REQUEST_LOAD_END = 'FAMILY_REQUEST_LOAD_END';
export const createFamilyRequest = request => ({
  type: FAMILY_REQUEST_CREATE,
  loadStart: FAMILY_REQUEST_LOAD_START,
  loadEnd: FAMILY_REQUEST_LOAD_END,
  payload: postFamilyRequest(request)
});
