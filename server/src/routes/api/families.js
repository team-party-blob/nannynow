import { Router } from 'express';
import FamilyProfile from '../../models/FamilyProfile';

export default Router().post('/', (req, res, next) => {
  console.log('route request', req.body)
  const {
    name,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    phone,
    email,
    user,
    agency,
    description,
    numOfChildren,
    birthdays
  } = req.body;

  FamilyProfile.create({
    name,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    phone,
    email,
    user,
    agency,
    description,
    numOfChildren,
    birthdays
  })
    .then(family => res.json(family))
    .catch(next);
});
