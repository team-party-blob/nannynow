import {
  updateProfile,
  PROFILE_UPDATE,
  createProfile,
  PROFILE_CREATE
} from './profile';
import { LOAD_START, LOAD_END } from './fixtures/loadingActions';
import { fakeProfile } from './fixtures/fakeProfile';

jest.mock('../services/profileApi.js');

describe('profile actions', () => {
  it('updates a profile', () => {
    const action = updateProfile('1234', fakeProfile);
    expect(action.type).toEqual(PROFILE_UPDATE);
    expect(action.loadStart).toEqual(LOAD_START);
    expect(action.loadEnd).toEqual(LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });

  it('creates a profile', () => {
    const action = createProfile('1234', fakeProfile);
    expect(action.type).toEqual(PROFILE_CREATE);
    expect(action.loadStart).toEqual(LOAD_START);
    expect(action.loadEnd).toEqual(LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });
});
