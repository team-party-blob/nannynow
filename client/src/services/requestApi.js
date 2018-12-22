import { stringify } from 'querystring';
import { post, get, patch } from './request';

export const createFamilyRequest = (family, agency, searchQuery, requestedNannies) => {
  const { startDateTime, endDateTime, birthdays, appointmentComments } = searchQuery;

  return post('/api/requests', { family, agency, startDateTime, endDateTime, birthdays, appointmentComments, requestedNannies });
};

export const fetchFilteredNannies = (start, end) => {
  const query = stringify({ start, end });
  return get(`/api/nannies/search?${query}`)
    .then(result => {
      return result.nannyProfile;
    });
};

export const getRequests = userId => {
  return get(`/api/requests/user/${userId}`);
};

export const getRequest = requestId => {
  return get(`/api/requests/detail/${requestId}`);
};

export const updateNannyRequestStatus = (requestId, nannyId, status) => {
  return patch(`/api/requests/status/${requestId}`, { nannyId, status })
    .then(result => {
      console.log(result);
    });
};
