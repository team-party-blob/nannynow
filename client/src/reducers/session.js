import {
  SESSION_LOAD_START,
  SESSION_LOAD_END,
  SESSION_CREATE,
  SESSION_ERROR,
  SESSION_TOKEN
} from '../actions/session';

import {
  PROFILE_UPDATE,
  // need to figure out how to handle profile update loading
  // PROFILE_UPDATE_LOAD_START,
  // PROFILE_UPDATE_LOAD_END,
  // PROFILE_UPDATE_ERROR
} from '../actions/profile';


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
      return { ...state, user: payload, error: null };
    case SESSION_LOAD_START:
      return { ...state, loading: true };
    case SESSION_LOAD_END:
      return { ...state, loading: false };
    case SESSION_TOKEN:
      return { ...state, token: payload };
    case SESSION_ERROR:
      return { ...state, error: payload };
    case PROFILE_UPDATE:
      return { ...state, profile: payload, error: null };
    default:
      return state;
  }
}
