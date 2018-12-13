import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AppointmentDetail extends PureComponent {
  static propTypes = {
    detail: PropTypes.object,
    fetchAppointment: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { fetchAppointment } = this.props;
    const { appointmentId, userId } = this.props.match.params;
    fetchAppointment(appointmentId, userId);
  }

  render() {
    return (
      <Fragment>
        <h3>Appointment Detail</h3>
      </Fragment>
    );
  }
}

export default withRouter(AppointmentDetail);
