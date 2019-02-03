import Home from '../components/home/Home';
import { Route } from 'react-router-dom';
import React from 'react';
import { Signup, Signin } from '../containers/AuthContainer';
import { withSession } from '../components/auth/withSession';
import ProfileContainer from '../containers/ProfileContainer';
import DashBoardContainer from '../containers/DashBoardContainer';
import AppointmentDetail from '../containers/AppointmentDetail';
import RequestDetailContainer from '../containers/RequestDetailContainer';
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
    path: '/profile/:id',
    Component: withSession(ProfileContainer),
    linkTo: id => `/profile/${id}`

  },
  REQUEST_DETAIL: {
    path: '/dashboard/request/:userId/:requestId',
    Component: withSession(RequestDetailContainer),
    linkTo: (userId, requestId) => `/dashboard/request/${userId}/${requestId}`
  },
  APPOINTMENT_DETAIL: {
    path: '/dashboard/:userId/:appointmentId',
    Component: withSession(AppointmentDetail),
    linkTo: (userId, appointmentId) => `/dashboard/${userId}/${appointmentId}`
  },
  DASHBOARD: {
    path: '/dashboard/:id',
    Component: withSession(DashBoardContainer),
    linkTo: id => `/dashboard/${id}`
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
