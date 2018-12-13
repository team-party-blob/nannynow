import { combineReducers } from 'redux';
import session from './session';
import request from './requests/request';
import availability from './availability';

export default combineReducers({
  session,
  request,
  availability
});
