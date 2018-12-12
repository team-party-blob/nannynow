import { getAppointments as getAppointmentsService } from '../services/appointmentApi';

export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const GET_APPOINTMENTS_LOAD_START = 'GET_APPOINTMENTS_LOAD_START';
export const GET_APPOINTMENTS_LOAD_END = 'GET_APPOINTMENTS_LOAD_END';
export const GET_APPOINTMENTS_ERROR = 'GET_APPOINTMENTS_ERROR';
export const getAppointments = (userId) => ({
  type: GET_APPOINTMENTS,
  loadStart: GET_APPOINTMENTS_LOAD_START,
  loadEnd: GET_APPOINTMENTS_LOAD_END,
  errorType: GET_APPOINTMENTS_ERROR,
  payload: getAppointmentsService(userId)
});
