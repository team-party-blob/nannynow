import React from 'react';
import { shallow } from 'enzyme';
import NannyProfile from './NannyProfile';

describe('Profile component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<NannyProfile />);
    expect(wrapper).toMatchSnapshot();
  });



});
