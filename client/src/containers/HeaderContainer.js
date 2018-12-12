import { connect } from 'react-redux';
import Header from '../components/header/Header';
import { getSession } from '../selectors/session';
import { signOut } from '../actions/session';

const mapStateToProps = state => ({
  session: getSession(state)
});

const dispatchStateToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(Header);
