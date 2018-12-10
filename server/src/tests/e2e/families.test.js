import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getFamilies, familiesSeedData } = require('./helpers/seedData');

const checkStatus = statusCode => res => {
  expect(res.status).toEqual(statusCode);
};

const checkOk = res => checkStatus(200)(res);

describe('families routes', () => {
  it('creates a family profile (with seed data helper)', () => {
    const createdFamilies = getFamilies();
    const families = familiesSeedData();

    expect(createdFamilies[0]).toEqual({
      agency: families[0].agency,
      email: families[0].email,
      role: families[0].role,
      _id: expect.any(String),
      createdDate: expect.anything(),
      passwordHash: expect.any(String)
    });
  });

  // it('hashes a family\'s password', () => {
  //   const createdAgencies = getAgencies();

  //   return Family.create({
  //     email: 'test@test.com',
  //     password: 'test',
  //     agency: createdAgencies[0]._id,
  //     role: 'family'
  //   }).then(family => {
  //     expect(family.passwordHash).not.toEqual('test');
  //     expect(compare('test', family.passwordHash));
  //   });
  // });

  // it('compares passwords', () => {
  //   const createdAgencies = getAgencies();

  //   const family = {
  //     email: 'test@test.com',
  //     password: 'test',
  //     agency: createdAgencies[0]._id,
  //     role: 'family'
  //   };

  //   Family.create(family).then(createdFamily => {
  //     expect(createdFamily.compare(family.password)).toBeTruthy();
  //     expect(createdFamily.compare('failing')).toBeFalsy();
  //   });
  // });

  // it('signs in a family', () => {
  //   return request(app)
  //     .post('/api/families/signin')
  //     .send({ email: 'admin@test.com', password: '123' })
  //     .then(res => {
  //       checkOk(res);
  //       expect(res.body.token).toEqual(expect.any(String));
  //     });
  // });

  // it('rejects a sign in with a bad password', () => {
  //   return request(app)
  //     .post('/api/families/signin')
  //     .send({ email: 'admin@test.com', password: 'badpassword' })
  //     .then(checkStatus(401));
  // });

  // it('rejects a sign in with a token but bad password', () => {
  //   let token;
  //   return request(app)
  //     .post('/api/families/signin')
  //     .send({ email: 'admin@test.com', password: '123' })
  //     .then(res => {
  //       token = res.body.token;
  //     })
  //     .then(
  //       request(app)
  //         .post('/api/families/signin')
  //         .set('Authorization', `Bearer ${token}`)
  //         .send({ email: 'nanny@test.com', password: 'badpassword' })
  //         .then(checkStatus(401))
  //     );
  // });

  // it('verifies a signed in family', () => {
  //   return request(app)
  //     .post('/api/families/signin')
  //     .send({ email: 'admin@test.com', password: '123' })
  //     .then(res => {
  //       return request(app)
  //         .get('/api/families/verify')
  //         .set('Authorization', `Bearer ${res.body.token}`)
  //         .then(res => {
  //           expect(res.body).toEqual({ success: true });
  //         });
  //     });
  // });

  // it('gets a list of all families', () => {
  //   const createdFamilies = getFamilies();

  //   return request(app)
  //     .get('/api/families')
  //     .then(res => {
  //       expect(res.body.length).toEqual(4);
  //       expect(res.body).toContainEqual(createdFamilies[0]);
  //       expect(res.body).toContainEqual(createdFamilies[1]);
  //       expect(res.body).toContainEqual(createdFamilies[2]);
  //       expect(res.body).toContainEqual(createdFamilies[3]);
  //     });
  // });

  // it('gets a family by id', () => {
  //   const createdFamilys = getFamilys();

  //   return request(app)
  //     .get(`/api/familys/${createdFamilys[1]._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual(createdFamilys[1]);
  //     });
  // });

  // it('deletes a family by id', () => {
  //   const createdFamilys = getFamilys();

  //   return request(app)
  //     .delete(`/api/familys/${createdFamilys[1]._id}`)
  //     .then(() => request(app).get('/api/familys'))
  //     .then(res => {
  //       expect(res.body).not.toContainEqual(createdFamilys[1]);
  //       expect(res.body).toContainEqual(createdFamilys[0]);
  //       expect(res.body).toContainEqual(createdFamilys[2]);
  //     });
  // });

  // it('updates a family by id', () => {
  //   const createdFamilys = getFamilys();

  //   return request(app)
  //     .put(`/api/familys/${createdFamilys[0]._id}`)
  //     .send({
  //       role: 'nanny'
  //     })
  //     .then(res => {
  //       expect(res.body.role).toEqual('nanny');
  //     });
  // });
});
