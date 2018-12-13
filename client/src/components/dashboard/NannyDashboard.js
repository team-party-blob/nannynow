import React, { Component, Fragment } from 'react';
import NannySchedulerContainer from '../../containers/NannySchedulerContainer';
import globalStyles from '../../main.css';

export default class NannyDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1 id={globalStyles.header}>I am a Nanny Dashboard!</h1>
        <NannySchedulerContainer { ...this.props }/>
      </Fragment>
    );
  }
}
