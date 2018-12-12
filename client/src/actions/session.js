import {
  signUp as signUpService,
  signIn as signInService,
  verifySession
} from '../services/authApi';

export const SESSION_CREATE = 'SESSION_CREATE';  //This will be the only action needed to get
export const SESSION_LOAD_START = 'SESSION_LOAD_START';
export const SESSION_LOAD_END = 'SESSION_LOAD_END';
export const SESSION_ERROR = 'SESSION_ERROR';

export const signUp = ({ email, password, role, agency }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOAD_START,
  loadEnd: SESSION_LOAD_END,
  errorType: SESSION_ERROR,
  payload: signUpService({ email, password, role, agency })
});


export const signIn = ({ email, password, role, agency }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOAD_START,
  loadEnd: SESSION_LOAD_END,
  errorType: SESSION_ERROR,
  payload: signInService({ email, password, role, agency })
});

export const SESSION_END = 'SESSION_END';
export const signOut = () => ({
  type: SESSION_END
});

export const refreshSession = () => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOAD_START,
  loadEnd: SESSION_LOAD_END,
  errorType: SESSION_ERROR,
  payload: verifySession()
});

export const SESSION_TOKEN = 'SESSION_TOKEN';
export const updateSessionToken = token => ({
  type: SESSION_TOKEN,
  payload: token
});
