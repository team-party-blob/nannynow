import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import { getSession, getSessionProfile, getSessionLoading } from '../selectors/session';

const mapStateToProps = state => ({
  user: getSession(state),
  profile: getSessionProfile(state),
  loading: getSessionLoading(state)
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
