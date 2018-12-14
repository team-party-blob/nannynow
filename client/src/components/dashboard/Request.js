import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
moment().format();

export default function Request({ user, request }) {
  return (
    <div>
      <Link to={ROUTES.REQUEST_DETAIL.linkTo(user._id, request._id)}>
        <div style={{ border: '1px solid black' }}>
          <p>
            Start Time: {getLocalDateTime(request.startDateTime)}
          </p>
          <p>End Time: {getLocalDateTime(request.endDateTime)}</p>
        </div>
      </Link>
    </div>
  );
}
