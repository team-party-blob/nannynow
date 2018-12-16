import React, { PureComponent } from 'react';
import NannyDashboard from './NannyDashboard';
import FamilyDashboard from './FamilyDashboard';
import PropTypes from 'prop-types';
import AdminDashBoard from './AdminDashBoard';
import { ROUTES } from '../../../routes/routes';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    appointments: PropTypes.array.isRequired,
    profile: PropTypes.object,
    fetchAppointments: PropTypes.func.isRequired,
    fetchRequests: PropTypes.func.isRequired
  };

  render() {
    const { role } = this.props.user;
    if(this.props.loading) return <h1>LoadING</h1>;
    if(!this.props.profile) return <Redirect to={ROUTES.PROFILE.linkTo(this.props.user._id)} />;
    return (
      <div>
        {role === 'admin' && <AdminDashBoard {...this.props} />}
        {role === 'nanny' && <NannyDashboard { ...this.props } />}
        {role === 'family' && <FamilyDashboard { ...this.props } />}
      </div>
    );
  }
}
