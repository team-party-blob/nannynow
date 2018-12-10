import {
  signUp as signUpService,
  signIn as signInService
} from '../services/authApi';

export const SESSION_CREATE = 'SESSION_CREATE';
export const SESSION_LOAD_START = 'SESSION_LOAD_START';
export const SESSION_LOAD_END = 'SESSION_LOAD_END';
export const SESSION_ERROR = 'SESSION_ERROR';

export const signUp = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOAD_START,
  loadEnd: SESSION_LOAD_END,
  errorType: SESSION_ERROR,
  payload: signUpService({ email, password })
});


export const signIn = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOAD_START,
  loadEnd: SESSION_LOAD_END,
  errorType: SESSION_ERROR,
  payload: signInService({ email, password })
});
