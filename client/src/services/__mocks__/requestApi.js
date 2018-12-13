import fakeFamilyRequest from '../fixtures/fakeFamilyRequest.json';

export const createFamilyRequest = () => {
  return Promise.resolve(Object.values(fakeFamilyRequest));
};
