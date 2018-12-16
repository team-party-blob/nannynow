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
    if(appointments) {
      appointments.sort((a, b) => {
        return new Date(a.arrivalTime) - new Date(b.arrivalTime);
      });
    }
    const appointmentComponents = appointments.map(appointment => {
      return (
        <table key={appointment._id}>
          <tbody>
            <tr>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
            <Appointment appointment={appointment} user={user} />
          </tbody>
        </table>
      );
    });

    return (
      <div id={styles.appointmentListBody}>
        {user.role === 'family' && <h1>Nannies Scheduled</h1>}
        {user.role === 'nanny' && <h1>Booked Appointments</h1>}
        {appointmentComponents}
      </div>
    );
  }
}
