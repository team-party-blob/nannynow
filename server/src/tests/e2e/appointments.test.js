import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import {
  getAppointments,
  appointmentsSeedData
} from './helpers/seedData';

describe(' appointments routes', () => {
  it('creates an appointment (with seed data helper)', () => {
    const createdAppointments = getAppointments();
    const appointments = appointmentsSeedData();
    console.log('created appts', createdAppointments);

    expect(createdAppointments[0]).toEqual({
      arrivalTime: expect.anything(),
      departureTime: expect.anything(),
      family: appointments[0].family,
      agency: appointments[0].agency,
      nanny: appointments[0].nanny,
      request: appointments[0].request,
      agencyFeePerHour: appointments[0].agencyFeePerHour,
      nannyPricePerHour: appointments[0].nannyPricePerHour,      
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });

  it('gets a list of all Appointments', () => {
    const createdAppointments = getAppointments();

    return request(app)
      .get('/api/appointments')
      .then(res => {
        expect(res.body.length).toEqual(1);
        expect(res.body).toContainEqual(createdAppointments[0]);
      });
  });

  // it('gets a Appointment by id', () => {
  //   const createdAppointments = getAppointments();

  //   return request(app)
  //     .get(`/api/requests/${createdAppointments[0]._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual(createdAppointments[0]);
  //     });
  // });

  // it('deletes a Appointment by id', () => {
  //   const createdAppointments = getAppointments();

  //   return request(app)
  //     .delete(`/api/requests/${createdAppointments[0]._id}`)
  //     .then(() => request(app).get('/api/requests'))
  //     .then(res => {
  //       expect(res.body).not.toContainEqual(createdAppointments[0]);
  //     });
  // });

  // it('updates a Appointment by id', () => {
  //   const createdAppointments = getAppointments();

  //   return request(app)
  //     .put(`/api/requests/${createdAppointments[0]._id}`)
  //     .send({
  //       appointmentComments: 'Test'
  //     })
  //     .then(res => {
  //       expect(res.body.appointmentComments).toEqual('Test');
  //     });
  // });
});
