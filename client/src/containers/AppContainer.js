import { connect } from 'react-redux';
import App from '../components/app/App';
import { getSession } from '../selectors/session';

const mapStateToProps = state => ({
  session: getSession(state)
});


export default connect(
  mapStateToProps,
  null
)(App);
