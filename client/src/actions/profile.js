import {
  updateProfile as putProfile,
  createProfile as postProfile,
} from '../services/profileApi';
import { LOAD_START, LOAD_END } from './fixtures/loadingActions';


export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR';
export const updateProfile = (id, profileInfo) => ({
  type: PROFILE_UPDATE,
  loadStart: LOAD_START,
  loadEnd: LOAD_END,
  errorType: PROFILE_UPDATE_ERROR,
  payload: putProfile(id, profileInfo)
});

export const PROFILE_CREATE = 'PROFILE_CREATE';
export const PROFILE_CREATE_ERROR = 'PROFILE_CREATE_ERROR';
export const createProfile = profileInfo => ({
  type: PROFILE_CREATE,
  loadStart: LOAD_START,
  loadEnd: LOAD_END,
  errorType: PROFILE_CREATE_ERROR,
  payload: postProfile(profileInfo)
});
