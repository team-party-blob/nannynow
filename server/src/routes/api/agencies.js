import { Router } from 'express';
import Agency from '../../models/Agency';

export default Router().post('/', (req, res, next) => {
  console.log('request at route', req.body);
  const {
    businessName,
    contactName,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    phone,
    businessEmail,
    website,
    hourlyFee
  } = req.body;

  Agency.create({
    businessName,
    contactName,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    phone,
    businessEmail,
    website,
    hourlyFee
  })
    .then(agency => res.json(agency))
    .catch(next);
});
