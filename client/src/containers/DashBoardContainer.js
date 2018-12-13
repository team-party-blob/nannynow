import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import { getSession, getSessionProfile, getSessionLoading } from '../selectors/session';
import { getAppointments } from '../selectors/appointment';
import { fetchAppointments } from '../actions/appointment';

const mapStateToProps = state => ({
  user: getSession(state),
  profile: getSessionProfile(state),
  appointments: getAppointments(state),
  loading: getSessionLoading(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAppointments: userId => dispatch(fetchAppointments(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
