import { FETCH_REQUESTS } from '../../actions/requests/requestList';

const initialState = {
  requests: [],
  detail: null,
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_REQUESTS:
      return { ...state, requests: [...payload] };
    default:
      return state;
  }
}
