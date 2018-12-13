import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Appointment({ appointment, user }) {

  return (
    <div>
      <Link to={ROUTES.APPOINTMENT_DETAIL.linkTo(user._id, appointment._id)}>
        <div>
          <p>Start Time: {appointment.request.startDateTime}</p>
          <p>End Time: {appointment.request.endDateTime}</p>
        </div>
      </Link>
    </div>
  );
}
