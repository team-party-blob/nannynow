import {
  FAMILY_REQUEST_CREATE,
  FAMILY_REQUEST_LOAD_START,
  FAMILY_REQUEST_LOAD_END,
  FAMILY_FETCH_FILTERED_NANNIES,
  FAMILY_UPDATE_SEARCH_QUERY
} from '../../actions/requests/request';

import { fakeFamilyRequest } from '../fixtures/fakeFamilyRequest';

const initialState = {
  search: {},
  filteredNannies: [],
  list: fakeFamilyRequest,
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FAMILY_REQUEST_CREATE:
      return { ...state, list: [...payload]  };
    case FAMILY_REQUEST_LOAD_START:
      return { ...state, loading: true };
    case FAMILY_REQUEST_LOAD_END:
      return { ...state, loading: false };
    case FAMILY_FETCH_FILTERED_NANNIES:
      return { ...state, filteredNannies: payload };
    case FAMILY_UPDATE_SEARCH_QUERY:
      return { ...state, search: payload };
    default:
      return state;
  }
}
