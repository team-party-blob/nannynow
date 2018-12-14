import React, { Component, Fragment } from 'react';
import NannySchedulerContainer from '../../containers/NannySchedulerContainer';
import globalStyles from '../../main.css';
import Appointments from './Appointments';
import Requests from './Requests';

export default class NannyDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1 id={globalStyles.header}>I am a Nanny Dashboard!</h1>
        <Appointments {...this.props} />
        <Requests {...this.props} />
        <NannySchedulerContainer {...this.props} />
      </Fragment>
    );
  }
}
