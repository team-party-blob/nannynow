import React from 'react';
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { getLocalDateTime } from '../../helpers/time';
import moment from 'moment';
import styles from './Request.css';
moment().format();

export default function Request({ user, request }) {
  return (
    <>
      <tr>
        <td>{getLocalDateTime(request.startDateTime)}</td>
        <td>{getLocalDateTime(request.endDateTime)}</td>
        <td>
          <Link to={ROUTES.REQUEST_DETAIL.linkTo(user._id, request._id)}>
            <button id={styles.detailButton}>Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
}
