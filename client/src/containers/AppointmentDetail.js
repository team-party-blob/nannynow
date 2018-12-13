import { connect } from 'react-redux';
import AppointmentDetail from '../components/dashboard/AppointmentDetail';
import { getAppointment, getNanny, getFamily } from '../selectors/appointment';
import { fetchAppointment } from '../actions/appointment';
import { fetchNanny } from '../actions/nanny';
import { fetchFamily } from '../actions/family';

const mapStateToProps = state => ({
  appointment: getAppointment(state),
  nanny: getNanny(state),
  family: getFamily(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAppointment: (appointmentId, userId) =>
    dispatch(fetchAppointment(appointmentId, userId)),
  fetchNanny: nanny => dispatch(fetchNanny(nanny)),
  fetchFamily: family => dispatch(fetchFamily(family))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentDetail);
