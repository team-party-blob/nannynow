import {
  FAMILY_REQUEST_CREATE,
  FAMILY_REQUEST_LOAD_START,
  FAMILY_REQUEST_LOAD_END,
  createRequest
} from './request';
import { fakeFamilyRequest } from '../fixtures/fakeFamilyRequest';

jest.mock('../../services/requestApi');

describe('family request actions', () => {
  it('creates a family request', () => {
    const action = createRequest(fakeFamilyRequest);
    expect(action.type).toEqual(FAMILY_REQUEST_CREATE);
    expect(action.loadStart).toEqual(FAMILY_REQUEST_LOAD_START);
    expect(action.loadEnd).toEqual(FAMILY_REQUEST_LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });
});
