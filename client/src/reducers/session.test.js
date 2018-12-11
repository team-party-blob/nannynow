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
    error: null
  };

  it('creates a new user in session on SESSION_CREATE', () => {
    const action = { type: SESSION_CREATE, payload: fakeUser };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, user: fakeUser });
  });

  it('starts loading on session on SESSION_LOAD_START', () => {
    const action = { type: SESSION_LOAD_START };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, loading: true });
  });

  it('stops loading on session on SESSION_LOAD_END', () => {
    const action = { type: SESSION_LOAD_END };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, loading: false });
  });

  it('sets token on SESSION_TOKEN', () => {
    const action = { type: SESSION_TOKEN, payload: '1234' };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, token: '1234' });
  });
});
