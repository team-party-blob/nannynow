import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import {
  getAvailableTimes,
  availableTimesSeedData
} from './helpers/seedData';

describe('requested available times routes', () => {
  it('creates a requested available time (with seed data helper)', () => {
    const createdAvailableTimes = getAvailableTimes();
    const availableTimes = availableTimesSeedData();

    expect(createdAvailableTimes[0]).toEqual({
      availableStartTime: expect.anything(),
      availableEndTime: expect.anything(),
      nanny: availableTimes[0].nanny,
      _id: expect.any(String),
      __v: 0,
      createdDate: expect.anything()
    });
  });
});
