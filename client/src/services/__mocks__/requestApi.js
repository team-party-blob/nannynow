import fakeFamilyRequest from '../fixtures/fakeFamilyRequest.json';
import fakeNannyRequestStatusUpdate from '../fixtures/fakeNannyRequestStatusUpdate.json';

export const createFamilyRequest = () => {
  return Promise.resolve(Object.values(fakeFamilyRequest));
};

export const updateNannyRequestStatus = () => {
  return Promise.resolve(Object.values(fakeNannyRequestStatusUpdate));
};

