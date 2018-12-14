import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import User from '../../models/User';
import { compare } from '../../utils/auth';
import { getFamilyToken } from './helpers/seedData';

const {
  getUsers,
  usersSeedData,
  getAgencies,
  getFamilies
} = require('./helpers/seedData');

const checkStatus = statusCode => res => {
  expect(res.status).toEqual(statusCode);
};

const checkOk = res => checkStatus(200)(res);

describe('users routes', () => {
  it('signs a user up (with seed data helper)', () => {
    const createdUsers = getUsers();
    const users = usersSeedData();

    expect(createdUsers[0]).toEqual({
      agency: users[0].agency,
      email: users[0].email,
      role: users[0].role,
      _id: expect.any(String),
      createdDate: expect.anything()
    });
  });

  it('hashes a user\'s password', () => {
    const createdAgencies = getAgencies();

    return User.create({
      email: 'test@test.com',
      password: 'test',
      agency: createdAgencies[0]._id,
      role: 'family'
    }).then(user => {
      expect(user.passwordHash).not.toEqual('test');
      expect(compare('test', user.passwordHash));
    });
  });

  it('compares passwords', () => {
    const createdAgencies = getAgencies();

    const user = {
      email: 'test@test.com',
      password: 'test',
      agency: createdAgencies[0]._id,
      role: 'family'
    };

    return User.create(user).then(createdUser => {
      expect(createdUser.compare(user.password)).toBeTruthy();
      expect(createdUser.compare('failing')).toBeFalsy();
    });
  });

  it('signs in a user', () => {
    const users = usersSeedData();

    return request(app)
      .post('/api/users/signin')
      .send({ email: 'family@test.com', password: '123' })
      .then(res => {
        checkOk(res);
        expect(res.body.user).toEqual({
          agency: users[0].agency,
          email: users[0].email,
          role: users[0].role,
          _id: expect.any(String),
          createdDate: expect.anything()
        });
        expect(res.body.profile).toEqual(getFamilies()[0]);
        expect(res.get('X-AUTH-TOKEN')).toEqual(expect.any(String));
      });
  });

  it('rejects a sign in with a bad password', () => {
    return request(app)
      .post('/api/users/signin')
      .send({ email: 'admin@test.com', password: 'badpassword' })
      .then(checkStatus(401));
  });

  it('rejects a sign in with a token but bad password', () => {
    let token;
    return request(app)
      .post('/api/users/signin')
      .send({ email: 'admin@test.com', password: '123' })
      .then(res => {
        token = res.body.token;
      })
      .then(() => {
        return request(app)
          .post('/api/users/signin')
          .set('Authorization', `Bearer ${token}`)
          .send({ email: 'nanny@test.com', password: 'badpassword' })
          .then(checkStatus(401));
      });
  });

  it('verifies a signed in user', () => {
    const token = getFamilyToken();
    return request(app)
      .get('/api/users/verify')
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        expect(res.body.user).toEqual(getUsers()[0]);
      });
  });

  it('gets a list of all users', () => {
    const createdUsers = getUsers();

    return request(app)
      .get('/api/users')
      .then(res => {
        expect(res.body.length).toEqual(6);
        expect(res.body).toContainEqual(createdUsers[0]);
        expect(res.body).toContainEqual(createdUsers[1]);
        expect(res.body).toContainEqual(createdUsers[2]);
        expect(res.body).toContainEqual(createdUsers[3]);
        expect(res.body).toContainEqual(createdUsers[4]);
      });
  });

  it('deletes a user by id', () => {
    const createdUsers = getUsers();

    return request(app)
      .delete(`/api/users/${createdUsers[1]._id}`)
      .then(() => {
        return request(app).get('/api/users');
      })
      .then(res => {
        expect(res.body).not.toContainEqual(createdUsers[1]);
        expect(res.body).toContainEqual(createdUsers[0]);
        expect(res.body).toContainEqual(createdUsers[2]);
      });
  });

  it('updates a user by id', () => {
    const createdUsers = getUsers();

    return request(app)
      .put(`/api/users/${createdUsers[0]._id}`)
      .send({
        role: 'nanny'
      })
      .then(res => {
        expect(res.body.role).toEqual('nanny');
      });
  });

  it('gets a user by id', () => {
    const createdUsers = getUsers();

    return request(app)
      .get(`/api/users/${createdUsers[1]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdUsers[1]);
      });
  });
});
