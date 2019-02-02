import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import {
  getRequestedAppointments,
  requestedAppointmentsSeedData,
} from './helpers/seedData';

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
      requestedNannies: [
        {
          _id: expect.any(String),
          nanny: requestedAppointments[0].requestedNannies[0].nanny,
          status: 'no response',
        },
        {
          _id: expect.any(String),
          nanny: requestedAppointments[0].requestedNannies[1].nanny,
          status: 'no response',
        },
      ],
      closed: expect.any(Boolean),
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything(),
    });
  });

  it('gets a list of all requestedAppointments', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .get('/api/requests')
      .then(res => {
        expect(res.body.length).toEqual(4);
        expect(res.body).toContainEqual(createdRequestedAppointments[0]);
        expect(res.body).toContainEqual(createdRequestedAppointments[1]);
        expect(res.body).toContainEqual(createdRequestedAppointments[2]);
        expect(res.body).toContainEqual(createdRequestedAppointments[3]);
      });
  });

  it('deletes a requestedAppointment by id', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .delete(`/api/requests/${createdRequestedAppointments[0]._id}`)

      .then(() => {
        return request(app).get('/api/requests');
      })
      .then(res => {
        expect(res.body).not.toContainEqual(createdRequestedAppointments[0]);
      });
  });

  it('updates a requestedAppointment by id', () => {
    const createdRequestedAppointments = getRequestedAppointments();

    return request(app)
      .put(`/api/requests/${createdRequestedAppointments[0]._id}`)
      .send({
        appointmentComments: 'Test',
      })
      .then(res => {
        expect(res.body.appointmentComments).toEqual('Test');
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

  it('updates the status of a requested nanny', () => {
    const createdRequestedAppointments = getRequestedAppointments();
    const requestId = createdRequestedAppointments[0]._id;
    const { requestedNannies } = createdRequestedAppointments[0];
    const statusUpdate = {
      nannyId: requestedNannies[0].nanny,
      status: 'accepted',
    };

    return request(app)
      .patch(`/api/requests/status/${requestId}`)
      .send(statusUpdate)
      .then(res => {
        expect(res.body.nModified).toEqual(1);
        return request(app)
          .get(`/api/requests/${requestId}`)
          .then(res => {
            expect(res.body.requestedNannies).toEqual(
              expect.arrayContaining([
                expect.objectContaining({ status: 'accepted' }),
              ]),
            );
          });
      });
  });

  it('fetches requestedAppointments for a specific nanny', () => {
    const createdRequestedAppointments = getRequestedAppointments();
    const nannyId = createdRequestedAppointments[0].requestedNannies[0].nanny;
    return request(app)
      .get(`/api/requests/user/${nannyId}`)
      .then(res => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              requestedNannies: expect.arrayContaining([
                expect.objectContaining({ nanny: nannyId }),
              ]),
            }),
          ]),
        );
      });
  });

  it('only fetches requests that the nanny has not declined', () => {
    const createdRequestedAppointments = getRequestedAppointments();
    const requestId = createdRequestedAppointments[0]._id;
    const { requestedNannies } = createdRequestedAppointments[0];
    const statusUpdate = {
      nannyId: requestedNannies[0].nanny,
      status: 'declined',
    };

    return request(app)
      .patch(`/api/requests/status/${requestId}`)
      .send(statusUpdate)
      .then(res => {
        expect(res.body.nModified).toEqual(1);
        return request(app)
          .get(`/api/requests/user/${requestedNannies[0].nanny}`)
          .then(res => {
            expect(res.body).not.toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  requestedNannies: expect.arrayContaining([
                    expect.objectContaining({ status: 'declined' }),
                  ]),
                }),
              ]),
            );
          });
      });
    // createdRequestedAppointments[0].requestedNannies[0].status = 'reject';
    // const rejectedRequest = createdRequestedAppointments[0];
    // const rejectingNanny = rejectedRequest.requestedNannies[0].nanny;
  });
});
