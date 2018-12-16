import React, { Component, Fragment } from 'react';
import NannySchedulerContainer from '../../../containers/NannySchedulerContainer';
import Appointments from '../appointments/Appointments';
import Requests from '../requests/Requests';

export default class NannyDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Appointments {...this.props} />
        <Requests {...this.props} />
        <NannySchedulerContainer {...this.props} />
      </Fragment>
    );
  }
}
