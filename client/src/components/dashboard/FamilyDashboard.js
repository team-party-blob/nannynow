import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appointments from './Appointments';
export default class FamilyDashboard extends Component {
  static propTypes = {
    appointments: PropTypes.array.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h1>I am a family dashboard</h1>
        <Appointments  {...this.props }/>
      </div>
    );
  }
}
