import fakeUser from '../fixtures/fakeUser.json'

export const signUp = () => {
  return Promise.resolve(Object.values(fakeUser));
};

export const signIn = () => {
  return Promise.resolve(Object.values(fakeUser));
};
