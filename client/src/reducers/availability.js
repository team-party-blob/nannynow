import {
  AVAILABILITY_UPDATE,
  AVAILABILITY_UPDATE_ERROR
} from '../actions/availability';
import { LOAD_START, LOAD_END } from '../actions/fixtures/loadingActions';

const initialState = {
  availability: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AVAILABILITY_UPDATE:
      return { ...state, availability: payload };
    case LOAD_START:
      return { ...state, loading: true };
    case LOAD_END:
      return { ...state, loading: false };
    case AVAILABILITY_UPDATE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
