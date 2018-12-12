import { get } from './request';

export const getAppointments = userId => {
  return get(`/api/appointments/users/${userId}`);
};
