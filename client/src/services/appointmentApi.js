import { get } from './request';

export const getAppointments = userId => {
  return get(`/api/appointments/user/${userId}`);
};

export const getAppointment = (appointmentId, userId) => {
  return get(`/api/appointments/detail/${userId}/${appointmentId}`);
};

