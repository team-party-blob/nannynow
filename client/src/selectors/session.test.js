import { getSession, getSessionToken, getSessionLoading, getSessionError } from './session';
import { fakeUser } from '../reducers/fixtures/fakeUser';
import { SESSION_ERROR } from '../actions/session';

describe('session selectors', () => {

  const state = {
    session: {
      user: fakeUser,
      token: '1234',
      loading: false,
      error: 401
    }
  };

  it('gets a session from session state', () => {
    const session = getSession(state);
    expect(session).toEqual(fakeUser);
  });

  it('gets a session token from session state', () => {
    const token = getSessionToken(state);
    expect(token).toEqual('1234');
  });

  it('gets session loading status from state', () => {
    const loadingStatus = getSessionLoading(state);
    expect(loadingStatus).toEqual(false);
  });

  it('gets an error from state', () => {
    const error = getSessionError(state);
    expect(error).toEqual(401);
  });
});
