import reducer from './session';
import { fakeUser } from './fixtures/fakeUser';
import {
  SESSION_LOAD_START,
  SESSION_LOAD_END,
  SESSION_CREATE,
  SESSION_ERROR,
  SESSION_TOKEN
} from '../actions/session';

jest.mock('../services/authApi.js');

describe('session reducer', () => {

  const initialState = {
    user: null,
    token: '',
    loading: false,
    error: SESSION_ERROR
  };

  it('creates a new user in session on SESSION_CREATE', () => {

    const action = { type: SESSION_CREATE, payload: fakeUser };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, user: fakeUser });
  });
});