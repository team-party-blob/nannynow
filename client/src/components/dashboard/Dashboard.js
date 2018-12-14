import React, { PureComponent } from 'react';
import NannyDashboard from './NannyDashboard';
import FamilyDashboard from './FamilyDashboard';
import PropTypes from 'prop-types';

export default class Dashboard extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    appointments: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
    fetchAppointments: PropTypes.func.isRequired,
    fetchRequests: PropTypes.func.isRequired
  };

  // componentDidMount() {
  //   console.log('mounted')
  //   this.props.fetchRequests(this.props.user._id);
  //   // this.props.fetchAppointments(this.props.user._id);
  // }
  

  render() {
    const { role } = this.props.user;
    if(this.props.loading) return <h1>LoadING</h1>;
    return (
      <div>
        {role === 'nanny' && <NannyDashboard {...this.props} />}
        {role === 'family' && <FamilyDashboard {...this.props} />}
      </div>
    );
  }
}
