import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
const {
  getRequestedAppointments,
  requestedAppointmentsSeedData
} = require('./helpers/seedData');

describe('requested appointments routes', () => {
  it('creates a requested appointment (with seed data helper)', () => {
    const createdRequestedAppointments = getRequestedAppointments();
    const requestedAppointments = requestedAppointmentsSeedData();

    expect(createdRequestedAppointments[0]).toEqual({
      startDateTime: expect.anything(),
      endDateTime: expect.anything(),
      birthdays: expect.any(Array),
      appointmentComments: requestedAppointments[0].appointmentComments,
      family: requestedAppointments[0].family,
      agency: requestedAppointments[0].agency,
      requestedNannies: requestedAppointments[0].requestedNannies,
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

  it('gets a list of all requestedAppointments', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .get('/api/requests')
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(createdRequestedAppointments[0]);
        expect(res.body).toContainEqual(createdRequestedAppointments[1]);
      });
  });

  it('gets a requestedAppointment by id', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .get(`/api/requests/${createdRequestedAppointments[0]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdRequestedAppointments[0]);
      });
  });

  it('deletes a requestedAppointment by id', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .delete(`/api/requests/${createdRequestedAppointments[0]._id}`)
      .then(() => request(app).get('/api/requests'))
      .then(res => {
        expect(res.body).not.toContainEqual(createdRequestedAppointments[0]);
      });
  });

  it('updates a requestedAppointment by id', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .put(`/api/requests/${createdRequestedAppointments[0]._id}`)
      .send({
        appointmentComments: 'Test'
      })
      .then(res => {
        expect(res.body.appointmentComments).toEqual('Test');
      });
  });
});
