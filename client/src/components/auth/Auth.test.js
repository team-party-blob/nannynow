import React from 'react';
import Auth from './Auth';
import { shallow } from 'enzyme';


jest.mock('../../routes/routes.js', () => ({
  ROUTES: {
    SIGNUP: {
      linkTo: () => '/'
    },
    SIGNIN: {
      linkTo: () => '/'
    },
    DASHBOARD: {
      linkTo: id => `/dashboard/${id}`
    }
  }
}));

jest.mock('../../assets/imageUrl.js');

describe('Auth component', () => {

  const onSubmit = jest.fn();

  it('matches snapshot', () => {
    const wrapper = shallow(<Auth loginType='Sign Up' onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows appropriate questions for new user', () => {
    const wrapper = shallow(<Auth loginType='Sign Up' onSubmit={onSubmit} />);
    expect(wrapper.html()).toContain('Are You a Nanny or a Family?');
    expect(wrapper.html()).toContain('Already Have an Account?');
    expect(wrapper.html()).not.toContain('New to Nanny Now?');
  });

  it('shows appropriate questions for existing user', () => {
    const wrapper = shallow(<Auth loginType='Sign In' onSubmit={onSubmit} />);
    expect(wrapper.html()).not.toContain('Already Have an Account?');
    expect(wrapper.html()).not.toContain('Are You a Nanny or a Family?');
    expect(wrapper.html()).toContain('New to Nanny Now?');
  });

  // it('redirects if session is not null true', () => {
  //   const session = {
  //     user: {
  //       _id: '1234'
  //     }
  //   };
  //   const wrapper = shallow(<Auth session={session} />);
  //   expect(wrapper.html()).toEqual('lskdjf');
  // })
});
