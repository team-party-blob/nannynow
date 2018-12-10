import { connect } from 'react-redux';
import Auth from '../components/auth/Auth';

export const Signup = connect(
  () =>({
    loginType: 'Sign Up'
  })
)(Auth);

export const Signin = connect(
  () =>({
    loginType: 'Sign In'
  })
)(Auth);
