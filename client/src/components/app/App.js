import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route path={ROUTES.HOME.path} component={ROUTES.HOME.component} />
        </Switch>
      </Fragment>
    </Router>
  );
}
