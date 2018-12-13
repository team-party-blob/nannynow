import { getFamilyRequest, getFamilyRequestLoading } from './request';
import { fakeFamilyRequest } from '../../reducers/fixtures/fakeFamilyRequest';

describe('family request selectors', () => {

  const state = {
    request: {
      list: fakeFamilyRequest,
      loading: false
    }
  };

  it('gets a family request from state', () => {
    const request = getFamilyRequest(state);
    expect(request).toEqual(fakeFamilyRequest);
  });

  it('gets family request loading from state', () => {
    const loading = getFamilyRequestLoading(state);
    expect(loading).toEqual(false);
  });

});
