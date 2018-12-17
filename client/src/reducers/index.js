import { combineReducers } from 'redux';
import session from './session';
import request from './requests/request';
import requestList from './requests/requestList';
import availability from './availability';
import appointment from './appointment';

export default combineReducers({
  session,
  appointment,
  request,
  availability,
  requestList
});
