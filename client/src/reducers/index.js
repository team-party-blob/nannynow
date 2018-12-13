import { combineReducers } from 'redux';
import session from './session';
import request from './requests/request';
import availability from './availability';
import appointment from './appointment';

export default combineReducers({
  session,
  appointment,
  request,
  availability
});
