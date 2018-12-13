import React from 'react';
import { shallow } from 'enzyme';
import NannyScheduler from './NannyScheduler';
import { isMainThread } from 'worker_threads';

describe('NannyScheduler component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<NannyScheduler />);
    expect(wrapper).toMatchSnapShot();
  });
});
