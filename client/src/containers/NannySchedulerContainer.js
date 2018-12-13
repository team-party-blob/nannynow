import { connect } from 'react-redux';
import NannyScheduler from '../components/dashboard/NannyScheduler';
import { updateAvailability, getAvailability } from '../actions/availability';


const dispatchStateToProps = dispatch => ({
  updateAvailability: (start, end, _id) =>
    dispatch(updateAvailability(start, end, _id)),
  getAvailability: userId => dispatch(getAvailability(userId))
});

export default connect(
  null,
  dispatchStateToProps
)(NannyScheduler);
