import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLocalDateTime } from '../../helpers/time';
import moment from 'moment';
import { ROUTES } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import styles from './RequestDetail.css';
moment().format();

class RequestDetail extends PureComponent {
  static propTypes = {
    detail: PropTypes.object,
    fetchRequest: PropTypes.func.isRequired,
    updateNannyStatus: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchRequest } = this.props;
    const { requestId } = this.props.match.params;
    fetchRequest(requestId);
  }

  handleStatusUpdate({ target }) {
    const { requestId } = this.props.match.params;
    const nannyId = this.props.session._id;
    this.props.updateNannyStatus(requestId, nannyId, target.value);
  }

  render() {
    const { detail, session } = this.props;
    const { role } = session;
    if(!detail) return null;
    const { requestedNannies } = detail.request;

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
            <p>
              <b>Name:</b> {requestedNanny.name}
            </p>
            <img src={requestedNanny.photo} alt='profile photo' />
            <p>
              <b>Price per hour:</b> {requestedNanny.pricePerHour + 3.5}
            </p>
            <p>
              <b>Phone:</b> {requestedNanny.phone}
            </p>
            <p>
              <b>Home ZIP Code:</b> {requestedNanny.zip}
            </p>
            <p>
              <b>Description:</b> {requestedNanny.description}
            </p>
            <p>
              <b>Status: </b> {requestedNannies[i].status}
            </p>
          </div>
        );
      }
    );

    return (
      <div id={styles.requestDetailBody}>
        <div>
          <h1>Request Detail</h1>
          <p>
            <b>Start Time:</b> {getLocalDateTime(detail.request.startDateTime)}
          </p>
          <p>
            <b>End Time:</b> {getLocalDateTime(detail.request.endDateTime)}
          </p>
          <p>
            <b>Number of Children:</b>
            {detail.request.birthdays.length}
          </p>
          <div id={styles.agesOfChildren}>
            <p>
              <b>Ages of Children: </b>
            </p>
            {ageComponents}
          </div>
          <p>
            <b>Appointment Comments:</b>
            {detail.request.appointmentComments}
          </p>
        </div>
        {role === 'nanny' && (
          <div>
            <h1>Family Profile:</h1>
            <img src={detail.familyProfile.photo} alt='profile photo' />
            <p>
              <b>Name:</b> {detail.familyProfile.name}
            </p>
            <p>
              <b>Phone:</b> {detail.familyProfile.phone}
            </p>
            <p>
              <b>Home ZIP code:</b> {detail.familyProfile.zip}
            </p>
            <p>
              <b>Number of Children: </b>
              {detail.familyProfile.birthdays.length}
            </p>
            <p>
              <b>Description:</b> {detail.familyProfile.description}
            </p>
            <button value="accept" type="button" onClick={this.handleStatusUpdate.bind(this)}>Accept Request</button>
            <button value="reject" type="button" onClick={this.handleStatusUpdate.bind(this)}>Reject Request</button>
          </div>
        )}
        {role === 'family' && nannyComponents}
        <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>
          <button id={styles.returnButton}>Return to Requests List</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(RequestDetail);
