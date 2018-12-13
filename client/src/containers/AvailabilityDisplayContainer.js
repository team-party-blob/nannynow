import { connect } from 'react-redux';
import AvailabilityDisplay from '../components/dashboard/AvailabilityDisplay';
import { removeAvailability, getAvailability } from '../actions/availability';
import { getSession } from '../selectors/session';
import { getStateAvailability } from '../selectors/availability';

const mapStateToProps = state => ({
  user: getSession(state),
  availability: getStateAvailability(state)
});

const dispatchStateToProps = dispatch => ({
  getAvailability: nannyId => dispatch(getAvailability(nannyId)),
  removeAvailability: availabilityId =>
    dispatch(removeAvailability(availabilityId))
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(AvailabilityDisplay);
