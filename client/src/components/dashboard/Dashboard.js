import React, { PureComponent } from 'react';
import NannyDashboard from './NannyDashboard';
import FamilyDashboard from './FamilyDashboard';
import PropTypes from 'prop-types';

export default class Dashboard extends PureComponent {
  static propTypes = {
    appointments: PropTypes.array.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const { role } = this.props.user;

    return (
      <div>
        {role === 'nanny' && <NannyDashboard { ...this.props } />}
        {role === 'family' && <FamilyDashboard { ...this.props } />}
      </div>
    );
  }
}
