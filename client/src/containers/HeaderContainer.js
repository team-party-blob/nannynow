import { connect } from 'react-redux';
import Header from '../components/header/Header';
import { getSession } from '../selectors/session';

const mapStateToProps = state => ({
  session: getSession(state)
});

export default connect(
  mapStateToProps,
  null
)(Header);
