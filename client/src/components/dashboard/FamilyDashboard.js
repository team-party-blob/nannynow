import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Appointments from './Appointments';
import Requests from './Requests';
import FamilyRequestContainer from '../../containers/FamilyRequestContainer';

export default class FamilyDashboard extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    appointments: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    fetchRequests: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <Appointments {...this.props} />
        <Requests {...this.props} />
        <FamilyRequestContainer {...this.props} />
      </div>
    );
  }
}
