import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './NannyProfile.css';

export default class NannyProfile extends PureComponent {

  static propTypes = {
    session: PropTypes.object.isRequired,
    // onSubmit: PropTypes.func.isRequired
  };

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

  componentDidMount() {
    //Set session.profile to state here
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.url;
    //get id off of this.props.match;
    this.props.onSubmit(id, this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, role, agency } = this.state;
    this.props.onSubmit({ email, password, role, agency });
  };

  render() {

    console.log(this.props)
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
        <form onSubmit={this.handleSubmit}>
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
          <button>Submit Profile</button>
        </form>
        <div id={styles.profileView}>
          <img src={photo} />
          <h1>Name: {name}</h1>
          <h3>Age: {age}</h3>
          <h3>Street Address:{streetAddress1}</h3>
          <h3>Address (continued): {streetAddress2}</h3>
          <h3>City: {city}</h3>
          <h3>Zip Code: {zip}</h3>
          <h3>Phone Number: {phoneNumber}</h3>
          <h3>Hourly Rate: {pricePerHour}</h3>
          <h3>Description: {description}</h3>
        </div>
      </Fragment>
    );
  }
}
