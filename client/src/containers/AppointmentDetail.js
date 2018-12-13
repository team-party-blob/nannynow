import { connect } from 'react-redux';
import AppointmentDetail from '../components/dashboard/AppointmentDetail';
import { getAppointment } from '../selectors/appointment';
import { fetchAppointment } from '../actions/appointment';

const mapStateToProps = state => ({
  appointment: getAppointment(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAppointment: (appointmentId, userId) =>
    dispatch(fetchAppointment(appointmentId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentDetail);
