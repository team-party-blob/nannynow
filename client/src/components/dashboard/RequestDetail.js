import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLocalDateTime } from '../helpers/time';
import moment from 'moment';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';
import Chance from 'chance';
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

    const chance = new Chance();
    const img = chance.avatar({ fileExtension: 'jpg' });

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
            <h4>Nanny Profile {i}:</h4>
            <p>Name: {requestedNanny.name}</p>
            <img src={img} alt="profile photo" />
            <p>Price per hour: {requestedNanny.pricePerHour + 3.5}</p>
            <p>Phone: {requestedNanny.phone}</p>
            <p>Home ZIP code: {requestedNanny.zip}</p>
            <p>Description: {requestedNanny.description}</p>
          </div>
        );
      }
    );

    return (
      <Fragment>
        <div>
          <h3>Request Detail</h3>
          <p>Start Time: {getLocalDateTime(detail.request.startDateTime)}</p>
          <p>End Time: {getLocalDateTime(detail.request.endDateTime)}</p>
          <p>Number of Children: {detail.request.birthdays.length}</p>
          <p>Ages of Children: {ageComponents} </p>
          <p>Appointment Comments: {detail.request.appointmentComments}</p>
        </div>
        <div>
          <h4>Family Profile:</h4>
          <img src={img} alt="profile photo" />
          <p>Name: {detail.familyProfile.name}</p>
          <p>Phone: {detail.familyProfile.phone}</p>
          <p>Home ZIP code: {detail.familyProfile.zip}</p>
          <p>Number of Children: {detail.familyProfile.birthdays.length}</p>
          <p>Description: {detail.familyProfile.description}</p>
        </div>
        {nannyComponents}
        <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>
          Return to Requests List
        </Link>
      </Fragment>
    );
  }
}

export default withRouter(RequestDetail);
