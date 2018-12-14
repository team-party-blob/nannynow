import { connect } from 'react-redux';
import FamilyRequest from '../components/request/FamilyRequest';
import { getFamilyQuery, getFilteredNanniesRequest } from '../selectors/requests/request';
import { createRequest, updateFamilySearchQuery, getFilteredNannies } from '../actions/requests/request';

const mapStateToProps = state => ({
  searchQuery: getFamilyQuery(state),
  filteredNannies: getFilteredNanniesRequest(state)
});

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request)),
  updateSearchQuery: (query) => dispatch(updateFamilySearchQuery(query)),
  fetchFilteredNannies: (start, end) => dispatch(getFilteredNannies(start, end))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyRequest);
