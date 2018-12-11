import Home from '../components/home/Home';
import { Route } from 'react-router-dom';
import React from 'react';
import { Signup, Signin } from '../containers/AuthContainer';
import { withSession } from '../components/auth/withSession';
import NannyProfile from '../components/profile/NannyProfile';
import Dashboard from '../components/dashboard/Dashboard';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  SIGNUP: {
    path: '/signup',
    Component: Signup,
    linkTo: () => '/signup'
  },
  SIGNIN: {
    path: '/signin',
    Component: Signin,
    linkTo: () => '/signin'
  },
  NANNY_PROFILE: {
    // path: '/nanny-profile/:id',
    path: '/nanny-profile',
    // Component: withSession(NannyProfile),
    Component: NannyProfile,
    // linkTo: id => `/nanny-profile/${id}`
    linkTo: () => '/nanny-profile'

  },
  DASHBOARD: {
    path: '/dashboard/:id',
    Component: withSession(Dashboard),
    linkTo: id => `/dashboard/${id}`
  }
};


export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
