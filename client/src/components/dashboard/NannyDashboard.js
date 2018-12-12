import React, { Component } from 'react';
import NannyScheduler from './NannyScheduler';

export default class NannyDashboard extends Component {
  render() {
    return (
      <div>
        <h1>I am a Nanny Dashboard!</h1>
        <NannyScheduler />
      </div>
    );
  }
}
