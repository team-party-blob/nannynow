import { getAppointments } from '../services/appointmentApi';

export const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
export const FETCH_APPOINTMENTS_LOAD_START = 'FETCH_APPOINTMENTS_LOAD_START';
export const FETCH_APPOINTMENTS_LOAD_END = 'FETCH_APPOINTMENTS_LOAD_END';
export const FETCH_APPOINTMENTS_ERROR = 'FETCH_APPOINTMENTS_ERROR';
export const fetchAppointments = (userId) => ({
  type: FETCH_APPOINTMENTS,
  loadStart: FETCH_APPOINTMENTS_LOAD_START,
  loadEnd: FETCH_APPOINTMENTS_LOAD_END,
  errorType: FETCH_APPOINTMENTS_ERROR,
  payload: getAppointments(userId)
});
