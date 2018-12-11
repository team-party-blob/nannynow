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
});
