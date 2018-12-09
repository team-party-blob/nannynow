import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getAgencies, agenciesSeedData } = require('./helpers/seedData');

describe('agencies routes', () => {
  it('creates a new agency', () => {
    // const createdAgencies = getAgencies();
    // const agencies = agenciesSeedData();
    const agency = {
      businessName: 'NWNannies LLC',
      contactName: 'Linda',
      streetAddress1: '3 Monroe Parkway Suite P#129',
      city: 'Lake Oswego',
      state: 'OR',
      zip: 97035,
      phone: 5032455288,
      businessEmail: 'info@nwnannies.net',
      website: 'https://nwnannies.net/',
      hourlyFee: 3.5
    };

    return request(app)
      .post('/api/agencies')
      .send(agency)
      .then(res => {
        expect(res.body).toEqual({
          ...agency,
          _id: expect.any(String),
          __v: 0,
          createdDate: expect.anything()
        });
      });
  });

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
});
