import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getUsers, usersSeedData } = require('./helpers/seedData');

describe('users routes', () => {
  it('creates an agency with seed data helper', () => {
    const createdUsers = getUsers();
    const users = usersSeedData();

    expect(createdUsers[0]).toEqual({
      agency: users[0].agency,
      email: users[0].email,
      role: users[0].role,
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything(),
      passwordHash: expect.any(String)
    });
  });

  // it('gets a list of all users', () => {
  //   const createdUsers = getUsers();

  //   return request(app)
  //     .get('/api/users')
  //     .then(res => {
  //       expect(res.body.length).toEqual(1);
  //       expect(res.body).toContainEqual(createdUsers[0]);
  //     });
  // });

  // it('gets a agency by id', () => {
  //   const createdUsers = getUsers();

  //   return request(app)
  //     .get(`/api/users/${createdUsers[0]._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({ ...createdUsers[0] });
  //     });
  // });

  // it('deletes an agency by id', () => {
  //   const createdUsers = getUsers();

  //   return request(app)
  //     .delete(`/api/users/${createdUsers[0]._id}`)
  //     .then(({ body }) => expect(body).toEqual({ removed: true }));
  // });

  // it('updates an agency by id', () => {
  //   const createdUsers = getUsers();

  //   return request(app)
  //     .put(`/api/users/${createdUsers[0]._id}`)
  //     .send({
  //       contactName: 'Mike'
  //     })
  //     .then(res => {
  //       expect(res.body.contactName).toEqual('Mike');
  //     });
  // });
});
