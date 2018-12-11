import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const { getRequestedAppointments, requestedAppointmentsSeedData } = require('./helpers/seedData');

describe('requested appointments routes', () => {
  it('creates a requested appointment (with seed data helper)', () => {
    const createdRequestedAppointments = getRequestedAppointments();
    const requestedAppointments = requestedAppointmentsSeedData();

    expect(createdRequestedAppointments[0]).toEqual({
      ...requestedAppointments[0],
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

//   it('gets a list of all requestedAppointments', () => {
//     const createdRequestedAppointments = getRequestedAppointments();

//     return requestedAppointment(app)
//       .get('/api/requestedAppointments')
//       .then(res => {
//         expect(res.body.length).toEqual(2);
//         expect(res.body).toContainEqual(createdRequestedAppointments[0]);
//         expect(res.body).toContainEqual(createdRequestedAppointments[1]);
//       });
//   });

//   it('gets a requestedAppointment by id', () => {
//     const createdRequestedAppointments = getRequestedAppointments();

//     return requestedAppointment(app)
//       .get(`/api/requestedAppointments/${createdRequestedAppointments[0]._id}`)
//       .then(res => {
//         expect(res.body).toEqual(createdRequestedAppointments[0]);
//       });
//   });

//   it('deletes a requestedAppointment by id', () => {
//     const createdRequestedAppointments = getRequestedAppointments();

//     return requestedAppointment(app)
//       .delete(`/api/requestedAppointments/${createdRequestedAppointments[0]._id}`)
//       .then(() => requestedAppointment(app).get('/api/requestedAppointments'))
//       .then(res => {
//         expect(res.body).not.toContainEqual(createdRequestedAppointments[0]);
//       });
//   });

//   it('updates a requestedAppointment by id', () => {
//     const createdRequestedAppointments = getRequestedAppointments();

//     return requestedAppointment(app)
//       .put(`/api/requestedAppointments/${createdRequestedAppointments[0]._id}`)
//       .send({
//         name: 'Jim'
//       })
//       .then(res => {
//         expect(res.body.name).toEqual('Jim');
//       });
//   });
});
