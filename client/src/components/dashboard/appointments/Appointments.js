import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
import styles from './Appointments.css';
export default class Appointments extends PureComponent {
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
        <ul key={appointment._id}>
          <Appointment
            appointment={appointment}
            user={user}
          />
        </ul>
      );
    });

    return (
      <div id={styles.appointmentListBody}>
        {user.role === 'family' && <h1>Nannies Scheduled</h1>}
        {user.role === 'nanny' && <h1>Upcoming Jobs</h1>}
        {appointmentComponents}
      </div>
    );
  }
}
