import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
moment().format();

export default function Appointment({ appointment, user }) {
  return (
    <div>
      <Link to={ROUTES.APPOINTMENT_DETAIL.linkTo(user._id, appointment._id)}>
        <div style={{ border: '1px solid black' }}>
          <p>Start Time: {getLocalDateTime(appointment.request.startDateTime)}</p>
          <p>End Time: {getLocalDateTime(appointment.request.endDateTime)}</p>
        </div>
      </Link>
    </div>
  );
}
