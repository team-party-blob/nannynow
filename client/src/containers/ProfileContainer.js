import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getSession, getSessionProfile } from '../selectors/session';
import { updateProfile, createProfile } from '../actions/profile';
import NannyProfile from '../components/profile/NannyProfile';
import FamilyProfile from '../components/profile/FamilyProfile';

const mapStateToProps = (state, props) => ({
  session: getSession(state),
  profile: getSessionProfile(state),
  handleRedirect: id => this.props.history.push(ROUTES.DASHBOARD.linkTo(id)),
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (id, profileInfo) => dispatch(updateProfile(id, profileInfo)),
  createProfile: (profileInfo) => dispatch(createProfile(profileInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(roleSwitch({
  Admin: <h1>Admin Profile</h1>,
  Nanny: NannyProfile,
  Family: FamilyProfile
}));
