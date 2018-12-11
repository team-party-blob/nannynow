import fakeProfile from '../fixtures/fakeProfile.json';

export const updateProfile = () => {
  return Promise.resolve(Object.values(fakeProfile));
};
