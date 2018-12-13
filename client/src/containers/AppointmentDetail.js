import { connect } from 'react-redux';
import AppointmentDetail from '../components/dashboard/AppointmentDetail';
import { getAppointment } from '../selectors/appointment';
import { fetchAppointment } from '../actions/appointment';
import { getSession } from '../selectors/session';

const mapStateToProps = state => ({
  detail: getAppointment(state),
  session: getSession(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAppointment: (appointmentId, userId) =>
    dispatch(fetchAppointment(appointmentId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentDetail);
