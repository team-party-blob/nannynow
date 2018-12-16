import React from 'react';
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../../helpers/time';
import moment from 'moment';
moment().format();

export default function Request({ user, request }) {
  return (
    <li>
      <Link to={ROUTES.REQUEST_DETAIL.linkTo(user._id, request._id)}>
        {getLocalDateTime(request.startDateTime)} - UNTIL -{' '}
        {getLocalDateTime(request.endDateTime)}
      </Link>
    </li>
  );
}
