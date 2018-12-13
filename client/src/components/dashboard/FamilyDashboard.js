import React, { Component } from 'react';
import FamilyRequestContainer from '../../containers/FamilyRequestContainer';


export default class FamilyDashboard extends Component {
  render() {
    return (
      <div>
        <h1>I am a family dashboard</h1>
        <FamilyRequestContainer {...this.props} />
      </div>
    );
  }
}
