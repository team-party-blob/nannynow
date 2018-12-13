import {
  FAMILY_REQUEST_CREATE,
  FAMILY_REQUEST_LOAD_START,
  FAMILY_REQUEST_LOAD_END
} from '../../actions/requests/request';

import { fakeFamilyRequest } from '../fixtures/fakeFamilyRequest';

const initialState = {
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
    default:
      return state;
  }
}
