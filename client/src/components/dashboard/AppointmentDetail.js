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
    nanny: PropTypes.object.isRequired,
    family: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchAppointment } = this.props;
    const { appointmentId, userId } = this.props.match.params;

    fetchAppointment(appointmentId, userId).then(
      Promise.all(() => {
        const { fetchFamily, fetchNanny, detail } = this.props;
        fetchNanny(detail.nanny._id), fetchFamily(detail.family._id);
      })
    );
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
