import { stringify } from 'querystring';
import { post, get } from './request';

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
