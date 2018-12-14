import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Appointments from './Appointments';
import FamilyRequestContainer from '../../containers/FamilyRequestContainer';


export default class FamilyDashboard extends Component {
  static propTypes = {
    appointments: PropTypes.array.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Appointments  {...this.props }/>
        <FamilyRequestContainer {...this.props} />
      </div>
    );
  }
}
