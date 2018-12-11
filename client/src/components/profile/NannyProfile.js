import React, { PureComponent, Fragment } from 'react';
import styles from './NannyProfile.css';

export default class Profile extends PureComponent {
  state = {
    photo: '',
    name: '',
    age: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    zip: '',
    phoneNumber: '',
    pricePerHour: '',
    description: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      photo,
      name,
      age,
      streetAddress1,
      streetAddress2,
      city,
      zip,
      phoneNumber,
      pricePerHour,
      description
    } = this.state;

    return (
      <Fragment>
        <h1>Create Your Profile</h1>
        <form>
          <label htmlFor='name'>Full Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor='photo'>Upload A Photo:</label>
          <input
            type='file'
            name='photo'
            value={photo}
            onChange={this.handleChange}
          />
          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            name='age'
            min={18}
            value={age}
            onChange={this.handleChange}
          />
          <label htmlFor='streetAddress1'>Street Address:</label>
          <input
            type='text'
            name='streetAddress1'
            value={streetAddress1}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='streetAddress2'
            value={streetAddress2}
            onChange={this.handleChange}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
          />
          <label htmlFor='zip'>Zip</label>
          <input
            type='text'
            name='zip'
            value={zip}
            onChange={this.handleChange}
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            onChange={this.handleChange}
          />
          <label htmlFor='pricePerHour'>Your Hourly Rate:</label>
          <input
            type='number'
            name='pricePerHour'
            value={pricePerHour}
            onChange={this.handleChange}
          />
          <label htmlFor='description'>Tell Us About Yourself:</label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleChange}
          />
        </form>
        <div id={styles.profileView}>

        </div>
      </Fragment>
    );
  }
}
