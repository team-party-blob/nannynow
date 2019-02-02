import { get, post } from './request';

export const getAppointments = userId => {
  return get(`/api/appointments/user/${userId}`);
};

export const getAppointment = (appointmentId) => {
  return get(`/api/appointments/detail/${appointmentId}`);
};

export const createAppointment = (arrivalTime, departureTime, family, agency, nanny, request, nannyPricePerHour) => {
  return post('/api/appointments', { arrivalTime, departureTime, family, agency, nanny, request, nannyPricePerHour });
};
