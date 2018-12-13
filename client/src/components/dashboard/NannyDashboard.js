import React, { Component } from 'react';
import NannySchedulerContainer from '../../containers/NannySchedulerContainer';
import globalStyles from '../../main.css'

export default class NannyDashboard extends Component {
  render() {
    return (
      <div>
        <h1 id={globalStyles.header}>I am a Nanny Dashboard!</h1>
        <NannySchedulerContainer { ...this.props }/>
      </div>
    );
  }
}
