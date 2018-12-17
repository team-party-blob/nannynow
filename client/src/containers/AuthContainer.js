import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/session';
import Auth from '../components/auth/Auth';
import { getSession, getSessionError, getSessionLoading } from '../selectors/session';
import { withRouter } from 'react-router-dom';


export const Signup = withRouter(connect(
  state =>({
    loginType: 'Sign Up',
    user: getSession(state),
    error: getSessionError(state),
    loading: getSessionLoading(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password, role, agency }) => dispatch(signUp({ email, password, role, agency }))
  })
)(Auth));

export const Signin = withRouter(connect(
  state =>({
    loginType: 'Sign In',
    user: getSession(state),
    error: getSessionError(state),
    loading: getSessionLoading(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signIn({ email, password }))
  })
)(Auth));
