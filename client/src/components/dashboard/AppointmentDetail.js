import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
    console.log('detail', detail)
    if(!detail) return null;
    return (
      <Fragment>
        <h3>Appointment Detail</h3>
        <p></p>
      </Fragment>
    );
  }
}

export default withRouter(AppointmentDetail);
