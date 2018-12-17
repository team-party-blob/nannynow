import React from 'react';
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../../helpers/time';
import moment from 'moment';
moment().format();

export default function Appointment({ appointment, user }) {
  return (
    <>
      <tr>
        <td>
          {getLocalDateTime(appointment.request.startDateTime)}
        </td>
        <td>
          {getLocalDateTime(appointment.request.endDateTime)}
        </td>
        <td>
          <Link
            to={ROUTES.APPOINTMENT_DETAIL.linkTo(user._id, appointment._id)}
          >
            <button>Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
}
