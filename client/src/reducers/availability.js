import {
  AVAILABILITY_UPDATE,
  AVAILABILITY_UPDATE_LOAD_START,
  AVAILABILITY_UPDATE_LOAD_END,
  AVAILABILITY_UPDATE_ERROR,
} from '../actions/availability';

const initialState = {
  availability: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case AVAILABILITY_UPDATE:
      return { ...state, availability: payload };
    case AVAILABILITY_UPDATE_LOAD_START:
      return { ...state, loading: true };
    case AVAILABILITY_UPDATE_LOAD_END:
      return { ...state, loading: false };
    case AVAILABILITY_UPDATE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
