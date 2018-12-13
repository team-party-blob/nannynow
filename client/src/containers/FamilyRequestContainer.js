import { connect } from 'react-redux';
import FamilyRequest from '../components/request/FamilyRequest';
// import { getFamilyRequest } from '../selectors/requests/request';
import { createRequest } from '../actions/requests/request';

// const mapStateToProps = state => ({
//   request: getFamilyRequest(state)
// });

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))
});

export default connect(
  null,
  mapDispatchToProps
)(FamilyRequest);
