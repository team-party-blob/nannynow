import {
  FETCH_APPOINTMENTS,
  FETCH_APPOINTMENTS_LOAD_START,
  FETCH_APPOINTMENTS_LOAD_END,
  FETCH_APPOINTMENTS_ERROR
} from '../actions/appointment';

const initialState = {
  appointments: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_APPOINTMENTS:
      return { appointments: payload };
    case FETCH_APPOINTMENTS_LOAD_START:
      return { ...state, loading: true };
    case FETCH_APPOINTMENTS_LOAD_END:
      return { ...state, loading: false };
    case FETCH_APPOINTMENTS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
