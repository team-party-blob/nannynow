import React from 'react';
import ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Appointment({ appointment }) {
  return <Link to={ROUTES.APPOINTMENT_DETAIL.linkTo(appointment._id)}>{appointment.title}</Link>;
}
