import React from 'react';
import { shallow } from 'enzyme';
import AvailabilityDisplay from './AvailabilityDisplay';

describe('AvailabilityDisplay', () => {
  let startTime1 = new Date('2018-12-15T16:00:00.000Z');
  let endTime1 = new Date('2018-12-15T21:00:00.000Z');
  let startTime2 = new Date('2018-12-16T20:00:00.000Z');
  let endTime2 = new Date('2018-12-17T02:00:00.000Z');

  const availability = [
    {
      availableStartTime: startTime1,
      availableEndTime: endTime1
    },
    {
      availableStartTime: startTime2,
      availableEndTime: endTime2
    }
  ];

  it('matches snapshot', () => {
    const user = { _id: '1234' };
    const getAvailability = jest.fn();
    const removeAvailability = jest.fn();
    const wrapper = shallow(
      <AvailabilityDisplay availability={availability} user={user} getAvailability={getAvailability} removeAvailability={removeAvailability} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
