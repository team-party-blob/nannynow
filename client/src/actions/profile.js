import { updateProfile as putProfile } from '../services/profileApi';


export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const PROFILE_UPDATE_LOAD_START = 'PROFILE_UPDATE_LOAD_START';
export const PROFILE_UPDATE_LOAD_END = 'PROFILE_UPDATE_LOAD_END';
export const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR';
export const updateProfile = (id, profileInfo) => ({
  type: PROFILE_UPDATE,
  loadStart: PROFILE_UPDATE_LOAD_START,
  loadEnd: PROFILE_UPDATE_LOAD_END,
  errorType: PROFILE_UPDATE_ERROR,
  payload: putProfile(id, profileInfo)
});
