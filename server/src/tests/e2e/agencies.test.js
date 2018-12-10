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

  it('gets a agency by id', () => {
    const createdAgencies = getAgencies();

    return request(app)
      .get(`/api/agencies/${createdAgencies[0]._id}`)
      .then(res => {
        expect(res.body).toEqual({ ...createdAgencies[0] });
      });
  });

  it('deletes an agency by id', () => {
    const createdAgencies = getAgencies();

    return request(app)
      .delete(`/api/agencies/${createdAgencies[0]._id}`)
      .then(({ body }) => expect(body).toEqual({ removed: true }));
  });

  it('updates an agency by id', () => {
    const createdAgencies = getAgencies();

    return request(app)
      .put(`/api/agencies/${createdAgencies[0]._id}`)
      .send({
        contactName: 'Mike'
      })
      .then(res => {
        expect(res.body.contactName).toEqual('Mike');
      });
  });
});
