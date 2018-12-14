import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getFamilies, familiesSeedData } = require('./helpers/seedData');

describe('families routes', () => {
  it('creates a family profile (with seed data helper)', () => {
    const createdFamilies = getFamilies();
    const families = familiesSeedData();

    expect(createdFamilies[0]).toEqual({
      name: families[0].name,
      agency: families[0].agency,
      numOfChildren: families[0].numOfChildren,
      birthdays: expect.any(Array),
      streetAddress1: families[0].streetAddress1,
      city: families[0].city,
      state: families[0].state,
      zip: families[0].zip,
      phone: families[0].phone,
      email: families[0].email,
      description: families[0].description,
      photo: expect.any(String),
      user: expect.any(String),
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

  it('gets a list of all families', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .get('/api/families')
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(createdFamilies[0]);
        expect(res.body).toContainEqual(createdFamilies[1]);
      });
  });

  it('gets a family by id', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .get(`/api/families/${createdFamilies[0]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdFamilies[0]);
      });
  });

  it('deletes a family by id', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .delete(`/api/families/${createdFamilies[0]._id}`)
      .then(() => {
        return request(app).get('/api/families');
      })
      .then(res => {
        expect(res.body).not.toContainEqual(createdFamilies[0]);
      });
  });

  it('updates a family by id', () => {
    const createdFamilies = getFamilies();

    return request(app)
      .put(`/api/families/${createdFamilies[0]._id}`)
      .send({
        name: 'Jim'
      })
      .then(res => {
        expect(res.body.name).toEqual('Jim');
      });
  });
});
