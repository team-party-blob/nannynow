import {
  SESSION_LOAD_START,
  SESSION_LOAD_END,
  SESSION_CREATE,
  SESSION_ERROR
} from '../actions/session';

const initialState = {
  user: null,
  token: '',
  loading: false,
  error: SESSION_ERROR
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SESSION_CREATE:
      return { ...state, user: payload };
    case SESSION_LOAD_START:
      return { ...state, loading: true };
    case SESSION_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
