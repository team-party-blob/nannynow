import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import {
  getAppointments,
  appointmentsSeedData,
  getUsers
} from './helpers/seedData';

describe(' appointments routes', () => {
  it('creates an appointment (with seed data helper)', () => {
    const createdAppointments = getAppointments();
    const appointments = appointmentsSeedData();

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

  it('gets an Appointment by id', () => {
    const createdAppointments = getAppointments();

    return request(app)
      .get(`/api/appointments/${createdAppointments[0]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdAppointments[0]);
      });
  });

  it('gets a list of all appointments by for a family user id', () => {
    const createdUsers = getUsers();
    const appointments = getAppointments();

    return request(app)
      .get(`/api/appointments/user/${createdUsers[0]._id}`)
      .then(res => {
        expect(res.body).toEqual([
          {
            arrivalTime: expect.anything(),
            departureTime: expect.anything(),
            family: appointments[0].family,
            agency: appointments[0].agency,
            nanny: appointments[0].nanny,
            agencyFeePerHour: appointments[0].agencyFeePerHour,
            nannyPricePerHour: appointments[0].nannyPricePerHour,
            request: {
              startDateTime: expect.anything(),
              endDateTime: expect.anything(),
              appointmentComments: expect.any(String),
              birthdays: expect.any(Array),
              closed: expect.any(Boolean),
              _id: expect.any(String)
            },
            _id: expect.any(String),
            __v: 0,
            createdDate: expect.anything()
          }
        ]);
      });
  });

  it('gets a list of all appointments by for a nanny user id', () => {
    const createdUsers = getUsers();
    const appointments = getAppointments();

    return request(app)
      .get(`/api/appointments/user/${createdUsers[2]._id}`)
      .then(res => {
        expect(res.body).toEqual([
          {
            arrivalTime: expect.anything(),
            departureTime: expect.anything(),
            family: appointments[0].family,
            agency: appointments[0].agency,
            nanny: appointments[0].nanny,
            agencyFeePerHour: appointments[0].agencyFeePerHour,
            nannyPricePerHour: appointments[0].nannyPricePerHour,
            request: {
              startDateTime: expect.anything(),
              endDateTime: expect.anything(),
              appointmentComments: expect.any(String),
              birthdays: expect.any(Array),
              closed: expect.any(Boolean),
              _id: expect.any(String)
            },
            _id: expect.any(String),
            __v: 0,
            createdDate: expect.anything()
          }
        ]);
      });
  });

  it('gets a list of all appointments by for a admin user id', () => {
    const createdUsers = getUsers();
    const appointments = getAppointments();

    return request(app)
      .get(`/api/appointments/user/${createdUsers[4]._id}`)
      .then(res => {
        expect(res.body).toEqual([
          {
            arrivalTime: expect.anything(),
            departureTime: expect.anything(),
            family: appointments[0].family,
            agency: appointments[0].agency,
            nanny: appointments[0].nanny,
            agencyFeePerHour: appointments[0].agencyFeePerHour,
            nannyPricePerHour: appointments[0].nannyPricePerHour,
            request: {
              startDateTime: expect.anything(),
              endDateTime: expect.anything(),
              appointmentComments: expect.any(String),
              birthdays: expect.any(Array),
              closed: expect.any(Boolean),
              _id: expect.any(String)
            },
            _id: expect.any(String),
            __v: 0,
            createdDate: expect.anything()
          }
        ]);
      });
  });

  it('deletes a Appointment by id', () => {
    const createdAppointments = getAppointments();

    return request(app)
      .delete(`/api/appointments/${createdAppointments[0]._id}`)
      .then(() => {
        return request(app).get('/api/appointments');
      })
      .then(res => {
        expect(res.body).not.toContainEqual(createdAppointments[0]);
      });
  });

  it('updates a Appointment by id', () => {
    const createdAppointments = getAppointments();

    return request(app)
      .put(`/api/appointments/${createdAppointments[0]._id}`)
      .send({
        arrivalTime: '2018-12-20T02:00:00.000Z'
      })
      .then(res => {
        expect(res.body.arrivalTime).toEqual('2018-12-20T02:00:00.000Z');
      });
  });
});
