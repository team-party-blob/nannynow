import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getAgencies, agenciesSeedData } = require('./helpers/seedData');

describe('agencies routes', () => {
  it('creates an agency with seed data helper', () => {
    const createdAgencies = getAgencies();
    const agencies = agenciesSeedData();

    expect(createdAgencies[0]).toEqual({
      ...agencies[0],
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

  it('gets a list of all agencies', () => {
    const createdAgencies = getAgencies();

    return request(app)
      .get('/api/agencies')
      .then(res => {
        expect(res.body.length).toEqual(1);
        expect(res.body).toContainEqual(createdAgencies[0]);
      });
  });
});
