import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class FamilyRequest extends PureComponent {
  static propTypes ={
    profile: PropTypes.object.isRequired,
    createRequest: PropTypes.func.isRequired
  };

  state = {
    birthdays: [],
    closed: false,
    startDateTime: '',
    endDateTime: '',
    appointmentComments: '',
    requestedNannies: []
  };

  componentDidMount() {
    const { profile } = this.props;
    this.setState({ birthdays: profile.birthdays });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      birthdays,
      closed,
      startDateTime,
      endDateTime,
      appointmentComments,
      requestedNannies
    } = this.state;
    const { createRequest } = this.props;
    const request =
     {
       birthdays,
       closed,
       startDateTime,
       endDateTime,
       appointmentComments,
       requestedNannies
     };
    createRequest(request);
  };


  render() {
    console.log(this.state);
    const {
      birthdays,
      closed,
      startDateTime,
      endDateTime,
      appointmentComments,
      requestedNannies
    } = this.state;
    const childBirthdays = birthdays.map((birthday, i) => {
      const slicedBirthday = birthday.slice(0, 10);
      return (
        <p key={i}>
          <label>{slicedBirthday}</label>
          <input type="checkbox"/>
        </p>
      );
    });
    return (
      <Fragment>
        <h1>Request an Appointment</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='birthdays'>Children:</label>
            {childBirthdays}
          </form>
        </div>
      </Fragment>
    );
  }
}
