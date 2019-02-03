import { connect } from 'react-redux';
import RequestDetail from '../components/dashboard/requests/RequestDetail';
import { getRequest } from '../selectors/requests/requestList';
import { fetchRequest, updateRequestStatus } from '../actions/requests/requestList';

const mapStateToProps = state => ({
  detail: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: requestId => dispatch(fetchRequest(requestId)),
  updateNannyStatus: (requestId, nannyId, status) => dispatch(updateRequestStatus(requestId, nannyId, status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestDetail);
