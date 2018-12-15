import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import styles from './RequestDetail.css';
moment().format();

class RequestDetail extends PureComponent {
  static propTypes = {
    detail: PropTypes.object,
    fetchRequest: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchRequest } = this.props;
    const { requestId } = this.props.match.params;

    fetchRequest(requestId);
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

    const nannyComponents = detail.requestedNannyProfiles.map(
      (requestedNanny, i) => {
        return (
          <div key={i}>
            <h1>Nanny Profile {i + 1}:</h1>
            <p><b>Name:</b> {requestedNanny.name}</p>
            <img src={requestedNanny.photo} alt='profile photo' />
            <p><b>Price per hour:</b> {requestedNanny.pricePerHour + 3.5}</p>
            <p><b>Phone:</b> {requestedNanny.phone}</p>
            <p><b>Home ZIP Code:</b> {requestedNanny.zip}</p>
            <p><b>Description:</b> {requestedNanny.description}</p>
          </div>
        );
      }
    );

    return (
      <div id={styles.requestDetailBody}>
        <div>
          <h1>Request Detail</h1>
          <p><b>Start Time:</b> {getLocalDateTime(detail.request.startDateTime)}</p>
          <p><b>End Time:</b> {getLocalDateTime(detail.request.endDateTime)}</p>
          <p><b>Number of Children:</b>{detail.request.birthdays.length}</p>
          <div id={styles.agesOfChildren}>
            <p>
              <b>Ages of Children: </b>
            </p>
            {ageComponents}
          </div>
          <p><b>Appointment Comments:</b>{detail.request.appointmentComments}</p>
        </div>
        <div>
          <h1>Family Profile:</h1>
          <img src={detail.familyProfile.photo} alt='profile photo' />
          <p><b>Name:</b> {detail.familyProfile.name}</p>
          <p><b>Phone:</b> {detail.familyProfile.phone}</p>
          <p><b>Home ZIP code:</b> {detail.familyProfile.zip}</p>
          <p><b>Number of Children: </b>{detail.familyProfile.birthdays.length}</p>
          <p><b>Description:</b> {detail.familyProfile.description}</p>
        </div>
        {nannyComponents}
        <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>
          Return to Requests List
        </Link>
      </div>
    );
  }
}

export default withRouter(RequestDetail);
