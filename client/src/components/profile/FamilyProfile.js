import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.css';
import { statesArray } from './helpers/statesArray';

export default class FamilyProfile extends PureComponent {
  static propTypes = {
    session: PropTypes.object.isRequired,
    profile: PropTypes.object,
    createProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired
  };

  //Why would email be a required field if we are getting it at login. should take out of Family Profile
  state = {
    name: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: 'iamemail@email.com',
    description: '',
    birthday: '',
    birthdays: [],
    numOfChildren: 0,
    errorMessage: false
  };

  componentDidMount() {
    const { profile } = this.props;
    this.setState(profile);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { session, profile, updateProfile, createProfile } = this.props;
    const { _id, agency } = session;
    const {
      name,
      streetAddress1,
      streetAddress2,
      state,
      city,
      zip,
      phone,
      email,
      description,
      numOfChildren,
      birthdays
    } = this.state;
    const profileInfo = {
      name,
      streetAddress1,
      streetAddress2,
      state,
      city,
      zip,
      phone,
      email,
      description,
      numOfChildren,
      birthdays,
      user: _id,
      agency
    };

    {
      profile && updateProfile(profile._id, profileInfo);
    }
    {
      !profile && createProfile(profileInfo);
    }
  };

  addChild = event => {
    event.preventDefault();
    const updatedBirthdays = this.state.birthdays.concat(this.state.birthday);
    const updatedNumOfChildren = updatedBirthdays.length;
    this.setState({
      birthdays: updatedBirthdays,
      numOfChildren: updatedNumOfChildren
    });
  };

  removeChild = index => {
    const { birthdays } = this.state;
    const updatedBirthdays = [...birthdays];
    updatedBirthdays.splice(index, 1);
    this.setState({ birthdays: updatedBirthdays });
  };

  render() {
    const {
      name,
      streetAddress1,
      streetAddress2,
      city,
      zip,
      state,
      phone,
      description,
      birthdays,
      birthday,
      numOfChildren
    } = this.state;

    const childList = birthdays.map((child, i) => {
      const slicedChild = child.slice(0, 10);
      return (
        <div key={i}>
          <li>
            Child #{i + 1}: Born {slicedChild}
          </li>
          <button type='button' onClick={() => this.removeChild(i)}>
            Remove Child
          </button>
        </div>
      );
    });

    const statesList = statesArray.map(stateItem => {
      return (
        <option key={stateItem} value={stateItem}>
          {stateItem}
        </option>
      );
    });

    return (
      <Fragment>
        <h1 id={styles.profileHeader}>Create Your Profile</h1>
        <div id={styles.profileBody}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Full Name:</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor='streetAddress1'>Street Address:</label>
            <input
              type='text'
              name='streetAddress1'
              value={streetAddress1}
              onChange={this.handleChange}
              required
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
              required
            />
            <label htmlFor='state'>State</label>
            <select
              name='state'
              value={state}
              onChange={this.handleChange}
              required
            >
              <option value=''>--</option>
              {statesList}
            </select>
            <label htmlFor='zip'>Zip</label>
            <input
              type='text'
              name='zip'
              value={zip}
              onChange={this.handleChange}
              required
            />
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='phone'
              value={phone}
              onChange={this.handleChange}
            />

            <label htmlFor='birthday'>How Old Are Your Children?</label>
            <input
              type='date'
              min='2002-12-12'
              name='birthday'
              value={birthday}
              onChange={this.handleChange}
            />
            <button type='button' onClick={this.addChild}>
              Add Child
            </button>

            <label htmlFor='description'>
              Tell Us About Your Family. Any Special Needs?:
            </label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={this.handleChange}
              required
            />
            <button>Submit Profile</button>
          </form>
          <div id={styles.profileView}>
            <h1>Name: {name}</h1>
            <h3>Street Address:{streetAddress1}</h3>
            <h3>Address (continued): {streetAddress2}</h3>
            <h3>City: {city}</h3>
            <h3>State: {state}</h3>
            <h3>Zip Code: {zip}</h3>
            <h3>Phone Number: {phone}</h3>
            <h3>Number of Children: {numOfChildren}</h3>
            <h3>Child Birthdays: </h3>
            <ul>{childList}</ul>
            <h3>Details: {description}</h3>
          </div>
        </div>
      </Fragment>
    );
  }
}
