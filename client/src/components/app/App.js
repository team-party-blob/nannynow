import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes/routes';
import HeaderContainer from '../../containers/HeaderContainer';

export default function App() {
  return (
    <Router>
      <Fragment>
        <HeaderContainer />
        <Switch>
          {routerRoutes()}
        </Switch>
      </Fragment>
    </Router>
  );
}
