import React, { PureComponent } from 'react';
import NannyProfile from './NannyProfile';
import FamilyProfile from './FamilyProfile';
import { ROUTES } from '../../routes/routes';

export default class Profile extends PureComponent {

  handleRedirect = (id) => {
    this.props.history.push(ROUTES.DASHBOARD.linkTo(id));
  };

  render() {
    const { session } = this.props;
    const { role } = session;

    return (
      <div>
        {role === 'nanny' && <NannyProfile {...this.props} handleRedirect={this.handleRedirect} />}
        {role === 'family' && <FamilyProfile {...this.props} handleRedirect={this.handleRedirect} />}
      </div>
    );
  }
}
