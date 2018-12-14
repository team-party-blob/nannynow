import React from 'react';
import { shallow } from 'enzyme';
import NannyScheduler from './NannyScheduler';

describe('NannyScheduler component', () => {
  it('renders a component', () => {
    const updateAvailability = jest.fn();
    const wrapper = shallow(<NannyScheduler updateAvailability={updateAvailability} />);
    expect(wrapper).toMatchSnapshot();
  });
});
