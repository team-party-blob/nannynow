import {
  SESSION_CREATE,
  SESSION_ERROR,
  SESSION_TOKEN,
  SESSION_END
} from '../actions/session';

import {
  PROFILE_UPDATE,
  PROFILE_CREATE
} from '../actions/profile';
import { LOAD_START, LOAD_END } from '../actions/fixtures/loadingActions';


const initialState = {
  user: null,
  profile: null,
  token: '',
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SESSION_CREATE:
      return { ...state, user: payload.user, profile: payload.profile, error: null };
    case SESSION_END:
      window.localStorage.removeItem('token');
      return { ...initialState };
    case LOAD_START:
      return { ...state, loading: true };
    case LOAD_END:
      return { ...state, loading: false };
    case SESSION_TOKEN:
      return { ...state, token: payload };
    case SESSION_ERROR:
      return { ...state, error: payload.error };
    case PROFILE_UPDATE:
      return { ...state, profile: payload, error: null };
    case PROFILE_CREATE:
      return { ...state, profile: payload, error: null };
    default:
      return state;
  }
}
