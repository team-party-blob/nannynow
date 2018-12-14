import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
export default class Appointments extends Component {
  static propTypes = {
    appointments: PropTypes.array.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchAppointments } = this.props;
    const userId = this.props.match.params.id;
    fetchAppointments(userId);
  }

  render() {
    const { appointments, user } = this.props;

    const appointmentComponents = appointments.map(appointment => {
      return (
        <Appointment
          key={appointment._id}
          appointment={appointment}
          user={user}
        />
      );
    });

    return (
      <div>
        <h1>I am an appointment list.</h1>
        {appointmentComponents}
      </div>
    );
  }
}
