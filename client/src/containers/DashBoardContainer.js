import { connect } from 'react-redux';
import { getSession, getSessionProfile, getSessionLoading } from '../selectors/session';
import { getAppointments } from '../selectors/appointment';
import { getRequests } from '../selectors/requests/requestList';
import { fetchAppointments } from '../actions/appointment';
import { fetchRequests } from '../actions/requests/requestList';
import roleSwitch from '../components/roleSwitch';
import AdminDashBoard from '../components/dashboard/dashboards/AdminDashBoard';
import NannyDashboard from '../components/dashboard/dashboards/NannyDashboard';
import FamilyDashboard from '../components/dashboard/dashboards/FamilyDashboard';


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
)(roleSwitch({
  Admin: AdminDashBoard,
  Nanny: NannyDashboard,
  Family: FamilyDashboard
}));
