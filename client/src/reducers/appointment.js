import {
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_LOAD_START,
  GET_APPOINTMENTS_LOAD_END,
  GET_APPOINTMENTS_ERROR
} from '../actions/appointment';

const initialState = {
  appointments: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_APPOINTMENTS:
      return { appointments: payload };
    case GET_APPOINTMENTS_LOAD_START:
      return { ...state, loading: true };
    case GET_APPOINTMENTS_LOAD_END:
      return { ...state, loading: false };
    case GET_APPOINTMENTS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
