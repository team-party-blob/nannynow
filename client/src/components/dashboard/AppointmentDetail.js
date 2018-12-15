import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import styles from './AppointmentDetail.css';
moment().format();

class AppointmentDetail extends PureComponent {
  static propTypes = {
    detail: PropTypes.object,
    fetchAppointment: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchAppointment } = this.props;
    const { appointmentId } = this.props.match.params;

    fetchAppointment(appointmentId);
  }

  render() {
    const { detail, session } = this.props;
    if(!detail) return null;
    const ageComponents = detail.request.birthdays.map((birthday, i) => {
      const age = moment([birthday]).fromNow(true);
      return (
        <li key={i}>
          Child {i + 1}: {age}
        </li>
      );
    });

    return (
      <div id={styles.appointmentDetailBody}>
        <h1>Appointment Detail</h1>
        <p><b>Start Time:</b> {getLocalDateTime(detail.request.startDateTime)}</p>
        <p><b>End Time:</b> {getLocalDateTime(detail.request.endDateTime)}</p>
        <p><b>Number of Children:</b> {detail.request.birthdays.length}</p>
        <div id={styles.agesOfChildren}>
          <p><b>Ages of Children:</b></p>
          <ul>{ageComponents}</ul>
        </div>
        <p><b>Appointment Comments:</b> {detail.request.appointmentComments}</p>
        <div>
          <h2>Nanny Profile:</h2>
          <p><b>Name:</b> {detail.nannyProfile.name}</p>
          <img src={detail.nannyProfile.photo} alt='profile photo' />
          <p><b>Price per hour:</b> {detail.nannyProfile.pricePerHour + 3.5}</p>
          <p><b>Phone:</b> {detail.nannyProfile.phone}</p>
          <p><b>Home ZIP code:</b> {detail.nannyProfile.zip}</p>
          <p><b>Description:</b>{detail.nannyProfile.description}</p>
        </div>
        <div>
          <h2>Family Profile:</h2>
          <p><b>Name:</b> {detail.familyProfile.name}</p>
          <p><b>Phone:</b> {detail.familyProfile.phone}</p>
          <p><b>Home ZIP code:</b> {detail.familyProfile.zip}</p>
          <p><b>Number of Children:</b> {detail.familyProfile.birthdays.length}</p>
          <p><b>Description:</b> {detail.familyProfile.description}</p>
          <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>
            Return to Appointments List
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(AppointmentDetail);
