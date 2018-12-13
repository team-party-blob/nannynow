import { connect } from 'react-redux';
import FamilyRequest from '../components/request/FamilyRequest';
import { createRequest } from '../actions/requests/request';

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))
});

export default connect(
  null,
  mapDispatchToProps
)(FamilyRequest);
