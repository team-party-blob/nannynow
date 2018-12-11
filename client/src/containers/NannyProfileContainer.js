import { connect } from 'react-redux';
import NannyProfile from '../components/profile/NannyProfile';
import { getSession } from '../selectors/session';
import { updateProfile } from '../actions/profile';

const mapStateToProps = state => ({
  session: getSession(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (id, profileInfo) =>
    dispatch(
      updateProfile(id, profileInfo)
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NannyProfile);
