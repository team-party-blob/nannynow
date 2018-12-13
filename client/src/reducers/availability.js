import {
  AVAILABILITY_UPDATE,
  AVAILABILITY_UPDATE_ERROR,
  AVAILABILITY_FETCH,
  AVAILABILITY_FETCH_ERROR
} from '../actions/availability';
import { LOAD_START, LOAD_END } from '../actions/fixtures/loadingActions';

const initialState = {
  availability: null,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOAD_START:
      return { ...state, loading: true };
    case LOAD_END:
      return { ...state, loading: false };
    case AVAILABILITY_UPDATE_ERROR:
      return { ...state, error: payload };
    case AVAILABILITY_FETCH:
      return { ...state, availability: payload, error: null };
    case AVAILABILITY_FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
