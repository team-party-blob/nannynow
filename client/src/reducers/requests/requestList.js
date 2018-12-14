import {
  FETCH_REQUESTS,
  FETCH_REQUESTS_LOAD_START,
  FETCH_REQUESTS_LOAD_END,
  FETCH_REQUESTS_ERROR,
  FETCH_REQUEST,
  FETCH_REQUEST_LOAD_START,
  FETCH_REQUEST_LOAD_END,
  FETCH_REQUEST_ERROR
} from '../../actions/requests/requestList';

const initialState = {
  requests: [],
  detail: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_REQUESTS:
      return { ...state, requests: payload };
    case FETCH_REQUESTS_LOAD_START:
      return { ...state, loading: true };
    case FETCH_REQUESTS_LOAD_END:
      return { ...state, loading: false };
    case FETCH_REQUESTS_ERROR:
      return { ...state, error: payload };
    case FETCH_REQUEST:
      return { ...state, detail: payload };
    case FETCH_REQUEST_LOAD_START:
      return { ...state, loading: true };
    case FETCH_REQUEST_LOAD_END:
      return { ...state, loading: false };
    case FETCH_REQUEST_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
