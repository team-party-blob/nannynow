import React, { Component } from 'react';
import NannySchedulerContainer from '../../containers/NannySchedulerContainer';

export default class NannyDashboard extends Component {
  render() {
    return (
      <div>
        <h1>I am a Nanny Dashboard!</h1>
        <NannySchedulerContainer { ...this.props }/>
      </div>
    );
  }
}
