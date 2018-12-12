import { combineReducers } from 'redux';
import session from './session';
import appointment from './appointment';

export default combineReducers({
  session,
  appointment
});
