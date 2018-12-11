import { connect } from 'react-redux';
import NannyProfile from '../components/profile/NannyProfile';
import { getSession } from '../selectors/session';

const mapStateToProps = state => ({
  session: getSession(state)
});

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (profileInfo) => dispatch(createProfile(profileInfo))
// })

export default connect(
  mapStateToProps,
  null
)(NannyProfile);
