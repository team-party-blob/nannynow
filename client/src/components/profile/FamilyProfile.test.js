import React from 'react';
import { shallow } from 'enzyme';
import FamilyProfile from './FamilyProfile';
import { fakeUser } from '../../reducers/fixtures/fakeUser';


describe('Profile component', () => {
  it('renders a component', () => {
    const createProfile = jest.fn();
    const updateProfile = jest.fn();
    const wrapper = shallow(<FamilyProfile createProfile={createProfile} updateProfile={updateProfile} session={fakeUser} />);
    expect(wrapper).toMatchSnapshot();
  });



});
