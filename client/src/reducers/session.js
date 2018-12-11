import {
  SESSION_LOAD_START,
  SESSION_LOAD_END,
  SESSION_CREATE,
  SESSION_ERROR,
  SESSION_TOKEN
} from '../actions/session';


const initialState = {
  user: null,
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
    default:
      return state;
  }
}
