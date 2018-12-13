import { combineReducers } from 'redux';
import session from './session';
import availability from './availability';

export default combineReducers({
  session,
  availability
});
