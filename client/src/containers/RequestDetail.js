import { connect } from 'react-redux';
import RequestDetail from '../components/dashboard/RequestDetail';
import { getRequest } from '../selectors/requests/requestList';
import { fetchRequest } from '../actions/requests/requestList';
import { getSession } from '../selectors/session';

const mapStateToProps = state => ({
  detail: getRequest(state),
  session: getSession(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: requestId => dispatch(fetchRequest(requestId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestDetail);
