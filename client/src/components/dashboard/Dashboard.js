import React, { PureComponent } from 'react';
import NannyDashboard from './NannyDashboard';
import FamilyDashboard from './FamilyDashboard';
import LoadingImage from '../loader/LoadingImage';

export default class Dashboard extends PureComponent {

  render() {
    const { role } = this.props.user;
    console.log(this.props);
    if(this.props.loading) return <h1>LoadING</h1>;
    return (
      <div>
        {role === 'nanny' && <NannyDashboard { ...this.props } />}
        {role === 'family' && <FamilyDashboard { ...this.props } />}
      </div>
    );
  }
}
