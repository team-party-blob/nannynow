import React from 'react';
import { shallow } from 'enzyme';
import Profile from './NannyProfile';

describe('Profile component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });


});
