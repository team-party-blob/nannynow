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

    expect(createdAppointments[0]).toEqual({
      ...appointments[0],
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });
});
