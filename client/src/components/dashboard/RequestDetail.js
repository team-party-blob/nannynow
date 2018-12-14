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
    console.log(detail);
    console.log(session);

    return (
      <Fragment>
        <h3>Request Detail</h3>
        <Link to={ROUTES.DASHBOARD.linkTo(session._id)}>Return to Requests List</Link>
      </Fragment>
    );
  }
}

export default withRouter(AppointmentDetail);
