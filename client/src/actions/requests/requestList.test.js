import {
  updateRequestStatus,
  NANNY_UPDATE_REQUEST_STATUS
} from './requestList';
import { LOAD_START, LOAD_END } from '../fixtures/loadingActions';

jest.mock('../../services/requestApi');

describe('nanny request status update', () => {
  const nannyStatusUpdate = {
    requestId: '1234',
    nannyId: '5678',
    status: 'accepted'
  };

  it('updates nanny status for a specific request', () => {
    const action = updateRequestStatus(nannyStatusUpdate);
    expect(action.type).toEqual(NANNY_UPDATE_REQUEST_STATUS);
    expect(action.loadStart).toEqual(LOAD_START);
    expect(action.loadEnd).toEqual(LOAD_END);
    expect(typeof action.payload.then).toBe('function');
  });
});
