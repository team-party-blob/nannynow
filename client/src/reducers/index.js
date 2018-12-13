import { combineReducers } from 'redux';
import session from './session';
import request from './requests/request';

export default combineReducers({
  session,
  request
});
