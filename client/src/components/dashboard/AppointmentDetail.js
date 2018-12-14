import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
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
      <Fragment>
        <div>
          <h3>Appointment Details</h3>
          <p>Start Time: {getLocalDateTime(detail.request.startDateTime)}</p>
          <p>End Time: {getLocalDateTime(detail.request.endDateTime)}</p>
          <p>Number of Children: {detail.request.birthdays.length}</p>
          <p>Ages of Children: {ageComponents} </p>
          <p>Appointment Comments: {detail.request.appointmentComments}</p>
        </div>
        <div>
          <h4>Nanny Profile:</h4>
          <img src={detail.nannyProfile.photo} alt="profile photo" />
          <p>Name: {detail.nannyProfile.name}</p>
          <p>Price per hour: {detail.nannyProfile.pricePerHour + 3.5}</p>
          <p>Phone: {detail.nannyProfile.phone}</p>
          <p>Home ZIP code: {detail.nannyProfile.zip}</p>
          <p>Description: {detail.nannyProfile.description}</p>
        </div>
        <div>
          <h4>Family Profile:</h4>
          <img src={detail.familyProfile.photo} alt="profile photo" />
          <p>Name: {detail.familyProfile.name}</p>
          <p>Phone: {detail.familyProfile.phone}</p>
          <p>Home ZIP code: {detail.familyProfile.zip}</p>
          <p>Number of Children: {detail.familyProfile.birthdays.length}</p>
          <p>Description: {detail.familyProfile.description}</p>
        </div>
        <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>
          Return to Appointments List
        </Link>
      </Fragment>
    );
  }
}

export default withRouter(AppointmentDetail);
