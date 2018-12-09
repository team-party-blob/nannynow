import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

// jest.mock('../../assets/palm_logo.png', () => 'palm-logo.png');
describe('Header component', () => {


  it('renders a Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
