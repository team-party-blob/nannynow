import { getAppointments, getAppointment } from '../services/appointmentApi';

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

export const FETCH_APPOINTMENT = 'FETCH_APPOINTMENT';
export const FETCH_APPOINTMENT_LOAD_START = 'FETCH_APPOINTMENT_LOAD_START';
export const FETCH_APPOINTMENT_LOAD_END = 'FETCH_APPOINTMENT_LOAD_END';
export const FETCH_APPOINTMENT_ERROR = 'FETCH_APPOINTMENT_ERROR';
export const fetchAppointment = (appointmentId) => ({
  type: FETCH_APPOINTMENT,
  loadStart: FETCH_APPOINTMENT_LOAD_START,
  loadEnd: FETCH_APPOINTMENT_LOAD_END,
  errorType: FETCH_APPOINTMENT_ERROR,
  payload: getAppointment(appointmentId)
});
