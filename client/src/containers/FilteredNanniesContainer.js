import { connect } from 'react-redux';
import FamilyRequest from '../components/request/FamilyRequest';
import { getFamilyQuery, getFilteredNanniesRequest } from '../selectors/requests/request';
import { updateFamilySearchQuery, getFilteredNannies } from '../actions/requests/request';

const mapStateToProps = state => ({
  searchQuery: getFamilyQuery(state),
  filteredNannies: getFilteredNanniesRequest(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => dispatch(updateFamilySearchQuery(query)),
  fetchFilteredNannies: () => dispatch(getFilteredNannies())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyRequest);
