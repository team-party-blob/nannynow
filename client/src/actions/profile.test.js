import {
  updateProfile,
  PROFILE_UPDATE,
  PROFILE_UPDATE_LOAD_START,
  PROFILE_UPDATE_LOAD_END,
  createProfile,
  PROFILE_CREATE,
  PROFILE_CREATE_LOAD_START,
  PROFILE_CREATE_LOAD_END,
} from './profile';
import { fakeProfile } from './fixtures/fakeProfile';

jest.mock('../services/profileApi.js');

describe('profile actions', () => {

  it('updates a profile', () => {
    const action = updateProfile('1234', fakeProfile);
    expect(action.type).toEqual(PROFILE_UPDATE);
    expect(action.loadStart).toEqual(PROFILE_UPDATE_LOAD_START);
    expect(action.loadEnd).toEqual(PROFILE_UPDATE_LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });

  it('creates a profile', () => {
    const action = createProfile('1234', fakeProfile);
    expect(action.type).toEqual(PROFILE_CREATE);
    expect(action.loadStart).toEqual(PROFILE_CREATE_LOAD_START);
    expect(action.loadEnd).toEqual(PROFILE_CREATE_LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });
});
