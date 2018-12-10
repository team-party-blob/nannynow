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

  it('gets all nannies from database', () => {
    const createdNannies = getNannies();

    return request(app)
      .get('/api/nannies')
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(createdNannies[0]);
        expect(res.body).toContainEqual(createdNannies[1]);
      });
  });

  it('gets a nanny by id', () => {
    const createdNannies = getNannies();

    return request(app)
      .get(`/api/nannies/${createdNannies[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdNannies[0] });
      });
  });
});
