import { connect } from 'react-redux';
import NannyProfile from '../components/profile/NannyProfile';
import { getSession, getSessionProfile } from '../selectors/session';
import { updateProfile, createProfile } from '../actions/profile';

const mapStateToProps = state => ({
  session: getSession(state),
  profile: getSessionProfile(state)
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (id, profileInfo) => dispatch(updateProfile(id, profileInfo)),
  createProfile: (profileInfo) => dispatch(createProfile(profileInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NannyProfile);
