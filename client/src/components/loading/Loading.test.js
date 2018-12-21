import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

jest.mock('../../assets/nannyNowLogo.png');

describe('Loading component', () => {
  it('renders a snapshot component', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
