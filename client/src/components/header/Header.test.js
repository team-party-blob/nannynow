import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

jest.mock('../../assets/nannyNowLogo.png');

describe('Header component', () => {

  it('renders a Header component', () => {
    const session = { _id: '1234' };
    const wrapper = shallow(<Header session={session}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
