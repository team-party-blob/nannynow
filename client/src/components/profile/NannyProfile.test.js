import React from 'react';
import { shallow } from 'enzyme';
import NannyProfile from './NannyProfile';
import { fakeUser } from '../../reducers/fixtures/fakeUser';


describe('Profile component', () => {
  it('renders a component', () => {
    const createProfile = jest.fn();
    const updateProfile = jest.fn();
    const wrapper = shallow(<NannyProfile createProfile={createProfile} updateProfile={updateProfile} session={fakeUser} />);
    expect(wrapper).toMatchSnapshot();
  });



});
