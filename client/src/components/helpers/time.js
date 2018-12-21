import moment from 'moment';
moment().format();

export const getLocalDateTime = time => {
  return moment(time)
    .local()
    .format('dddd, MMMM Do YYYY, h:mm a');
};
