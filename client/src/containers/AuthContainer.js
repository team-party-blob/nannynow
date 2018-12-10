import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/session';
import Auth from '../components/auth/Auth';


export const Signup = connect(
  () =>({
    loginType: 'Sign Up'
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signUp({ email, password }))
  })
)(Auth);

export const Signin = connect(
  () =>({
    loginType: 'Sign In'
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signIn({ email, password }))
  })
)(Auth);
