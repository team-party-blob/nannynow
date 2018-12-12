import {
  updateProfile as putProfile,
  createProfile as postProfile
} from '../services/profileApi';


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


export const PROFILE_CREATE = 'PROFILE_CREATE';
export const PROFILE_CREATE_LOAD_START = 'PROFILE_CREATE_LOAD_START';
export const PROFILE_CREATE_LOAD_END = 'PROFILE_CREATE_LOAD_END';
export const PROFILE_CREATE_ERROR = 'PROFILE_CREATE_ERROR';
export const createProfile = (profileInfo) => ({
  type: PROFILE_CREATE,
  loadStart: PROFILE_CREATE_LOAD_START,
  loadEnd: PROFILE_CREATE_LOAD_END,
  errorType: PROFILE_CREATE_ERROR,
  payload: postProfile(profileInfo)
});
