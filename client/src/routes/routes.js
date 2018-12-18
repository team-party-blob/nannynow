import Home from '../components/home/Home';
import { Route } from 'react-router-dom';
import React from 'react';
import { Signup, Signin } from '../containers/AuthContainer';
import { withSession } from '../components/auth/withSession';
import ProfileContainer from '../containers/ProfileContainer';
import DashBoardContainer from '../containers/DashBoardContainer';
import AppointmentDetail from '../containers/AppointmentDetail';
import RequestDetail from '../containers/RequestDetail';
import About from '../components/about/About';

export const ROUTES = {
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about'
  },
  SIGNUP: {
    path: '/signup',
    Component: Signup,
    linkTo: () => '/signup'
  },
  SIGNIN: {
    path: '/signin',
    Component: Signin,
    linkTo: path => path ? `/signin?redirectTo=${path}` : '/signin'
  },
  PROFILE: {
    path: '/profile', // don't need an ID here.
    Component: withSession(ProfileContainer),
    linkTo: () => `/profile`

  },
  REQUEST_DETAIL: {
    path: '/dashboard/request/:requestId', // don't need a userId here. The user is in session
    Component: withSession(RequestDetail),
    linkTo: requestId => `/dashboard/request/${requestId}`
  },
  APPOINTMENT_DETAIL: {
    path: '/dashboard/:appointmentId', // don't need a userId here. The user is in session
    Component: withSession(AppointmentDetail),
    linkTo: appointmentId => `/dashboard/${appointmentId}`
  },
  DASHBOARD: {
    path: '/dashboard', // don't need a userId here. The user is in session
    Component: withSession(DashBoardContainer),
    linkTo: () => `/dashboard`
  },
  HOME: {
    path: '/',
    Component: Signin,
    linkTo: () => '/'
  }
};


export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
