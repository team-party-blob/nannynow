import React, { PureComponent, Fragment } from 'react';

export default class NannyProfile extends PureComponent {

  state = {
    photo: '',
    name: '',
    age: 0,
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    zip: 0,
    phoneNumber: 0,
    pricePerHour: 16,
    description: ''
  }

  render() {
    return (
      <Fragment>
        <h1>Create Your Profile</h1>
        <form>
          <input type="file" />
          <label>Full Name:</label>
          <input />
          <label>Age:</label>
          <input />
          <label>Street Address:</label>
          <input />
          <input />
          <label>City</label>
          <input />
          <label>Zip</label>
          <input />
          <label>Phone Number</label>
          <input />
          <label>Your Rates:</label>
          <input />
          <label>Tell Us About Yourself:</label>
          <input />
        </form>
      </Fragment>
    );
  }
}
