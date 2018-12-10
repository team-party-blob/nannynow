import {
  signIn,
  signUp,
  SESSION_CREATE,
  SESSION_LOAD_START,
  SESSION_LOAD_END,
  SESSION_ERROR
} from './session';

jest.mock('../services/authApi.js');

describe('session/auth actions', () => {

  it('signUp action starts, loads, and calls a as a payload', () => {
    const user = { email: 'test@test.com', passoword: 'test123' };
    const action = signUp(user);

    expect(action.type).toEqual(SESSION_CREATE);
    expect(action.loadStart).toEqual(SESSION_LOAD_START);
    expect(action.loadEnd).toEqual(SESSION_LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });

  it('signIn action starts, loads, and calls a as a payload', () => {
    const user = { email: 'test@test.com', passoword: 'test123' };
    const action = signIn(user);

    expect(action.type).toEqual(SESSION_CREATE);
    expect(action.loadStart).toEqual(SESSION_LOAD_START);
    expect(action.loadEnd).toEqual(SESSION_LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });


});
