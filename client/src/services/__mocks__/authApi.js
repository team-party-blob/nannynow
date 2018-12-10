import fakeUser from '../fixtures/fakeUser.json';
import fakeToken from '../fixtures/fakeToken.json';

export const signUp = () => {
  return Promise.resolve(Object.values(fakeUser));
};

export const signIn = () => {
  return Promise.resolve(Object.values(fakeUser));
};

export const verifySession = () => {
  return Promise.resolve(Object.values(fakeToken));
};
