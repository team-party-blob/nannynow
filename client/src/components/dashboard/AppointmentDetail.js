import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class AppointmentDetail extends PureComponent {
  static propTypes = {
    detail: PropTypes.object,
    fetchAppointment: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    fetchNanny: PropTypes.func.isRequired,
    fetchFamily: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchAppointment } = this.props;
    const { appointmentId, userId } = this.props.match.params;

    fetchAppointment(appointmentId, userId);
  }

  render() {
    const { detail } = this.props;
    if(!detail) return null;
    const ageComponents = detail.request.birthdays.map((birthday, i) => {
      const age = moment([birthday]);
      return <li>Child 1: ${age}<li>
    })

    return (
      <Fragment>
        <h3>Appointment Detail</h3>
        <p>Start Time: {detail.request.startDateTime}</p>
        <p>End Time: {detail.request.endDateTime}</p>
        <p>Number of Children: {detail.request.birthdays.length}</p>
        <p>Ages of Children: {moment([detail.request.birthdays[1]]).fromNow(true)}</p>
        <ul>Appointment Comments: {detail.request.appointmentComments}
          {ageComponents}
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(AppointmentDetail);
