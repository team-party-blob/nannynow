import React from 'react';
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../../helpers/time';
import styles from './Appointments.css';
import moment from 'moment';
moment().format();

export default function Appointment({ appointment, user }) {
  return (
    <li>
      <Link
        id={styles.appoinmentList}
        to={ROUTES.APPOINTMENT_DETAIL.linkTo(user._id, appointment._id)}
      >
        {getLocalDateTime(appointment.request.startDateTime)} - UNTIL -{' '}
        {getLocalDateTime(appointment.request.endDateTime)}
      </Link>
    </li>
  );
}
