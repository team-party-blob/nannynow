import './helpers/db';
import request from 'supertest';
import app from '../../routes/app';
import { getAvailableTimes, availableTimesSeedData } from './helpers/seedData';

describe('requested available times routes', () => {
  it('creates an available time (with seed data helper)', () => {
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

  it('gets a list of all available times for all available for all nannies', () => {
    const createdAvailableTimes = getAvailableTimes();

    return request(app)
      .get('/api/availability')
      .then(res => {
        expect(res.body.length).toEqual(2);
        expect(res.body).toContainEqual(createdAvailableTimes[0]);
        expect(res.body).toContainEqual(createdAvailableTimes[1]);
      });
  });

  it('gets an AvailableTime by id', () => {
    const createdAvailableTimes = getAvailableTimes();

    return request(app)
      .get(`/api/availability/${createdAvailableTimes[0]._id}`)
      .then(res => {
        expect(res.body).toEqual(createdAvailableTimes[0]);
      });
  });

  it('deletes a AvailableTime by id', () => {
    const createdAvailableTimes = getAvailableTimes();

    return request(app)
      .delete(`/api/availability/${createdAvailableTimes[0]._id}`)
      .then(() => {
        return request(app).get('/api/availability');
      })
      .then(res => {
        expect(res.body).not.toContainEqual(createdAvailableTimes[0]);
      });
  });

  it('updates available time by id', () => {
    const createdAvailableTimes = getAvailableTimes();

    return request(app)
      .put(`/api/availability/${createdAvailableTimes[0]._id}`)
      .send({
        availableEndTime: '2018-12-20T02:00:00.000Z'
      })
      .then(res => {
        expect(res.body.availableEndTime).toEqual('2018-12-20T02:00:00.000Z');
      });
  });
});
