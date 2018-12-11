import { Router } from 'express';
import FamilyProfile from '../../models/FamilyProfile';

export default Router()
  .post('/', (req, res, next) => {
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
  })

  .get('/', (req, res, next) => {
    FamilyProfile.find()
      .lean()
      .then(families => res.json(families))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    FamilyProfile.findById(id)
      .lean()
      .then(family => res.json(family))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;
    FamilyProfile.findByIdAndDelete(id)
      .then(family => res.json({ removed: !!family }))
      .catch(next);
  });
