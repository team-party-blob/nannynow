import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import { getNannies, nanniesSeedData } from './helpers/seedData';

describe('nanny routes', () => {
  it('creates an nanny with seed data helper', () => {
    const createdNannies = getNannies();
    const nannies = nanniesSeedData();
    expect(createdNannies[0]).toEqual({
      ...nannies[0],
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });
});
