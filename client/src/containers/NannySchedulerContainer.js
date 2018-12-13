import { connect } from 'react-redux';
import NannyScheduler from '../components/dashboard/NannyScheduler';
import { updateAvailability } from '../actions/availability';

const dispatchStateToProps = dispatch => ({
  updateAvailability: (start, end, _id) =>
    dispatch(updateAvailability(start, end, _id))
});

export default connect(
  () => ({ hi: 'there' }),

  dispatchStateToProps
)(NannyScheduler);
