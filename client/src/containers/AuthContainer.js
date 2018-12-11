import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/session';
import Auth from '../components/auth/Auth';
import { getSession } from '../selectors/session';


export const Signup = connect(
  state =>({
    loginType: 'Sign Up',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password, role, agency }) => dispatch(signUp({ email, password, role, agency }))
  })
)(Auth);

export const Signin = connect(
  state =>({
    loginType: 'Sign In',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signIn({ email, password }))
  })
)(Auth);
