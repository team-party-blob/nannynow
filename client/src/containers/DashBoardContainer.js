import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/dashboards/Dashboard';
import { getSession, getSessionProfile, getSessionLoading } from '../selectors/session';
import { getAppointments } from '../selectors/appointment';
import { getRequests } from '../selectors/requests/requestList';
import { fetchAppointments } from '../actions/appointment';
import { fetchRequests } from '../actions/requests/requestList';


const mapStateToProps = state => ({
  user: getSession(state),
  profile: getSessionProfile(state),
  appointments: getAppointments(state),
  loading: getSessionLoading(state),
  requests: getRequests(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAppointments: userId => dispatch(fetchAppointments(userId)),
    fetchRequests: userId => dispatch(fetchRequests(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
