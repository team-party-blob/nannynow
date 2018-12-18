import { Router } from 'express';
import FamilyProfile from '../../models/FamilyProfile';

export default Router()
  .post('/', (req, res, next) => {
    // only families and admins should be able to create this profile
    const {
      name,
      streetAddress1,
      streetAddress2,
      city,
      state,
      photo,
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
      photo,
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
    // this is an admin only action
    FamilyProfile.find()
      .lean()
      .then(families => res.json(families))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    // only admins and the owning user should be able to do this
    const { id } = req.params;
    FamilyProfile.findById(id)
      .lean()
      .then(family => res.json(family))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    // only admins and the owning user
    const { id } = req.params;
    FamilyProfile.findByIdAndDelete(id)
      .then(family => res.json({ removed: !!family }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    // only admin and owning user
    const { id } = req.params;
    const {
      name,
      streetAddress1,
      streetAddress2,
      city,
      state,
      zip,
      photo,
      phone,
      email,
      user,
      agency,
      description,
      numOfChildren,
      birthdays
    } = req.body;

    FamilyProfile.findByIdAndUpdate(
      id,
      {
        name,
        streetAddress1,
        streetAddress2,
        city,
        state,
        zip,
        phone,
        photo,
        email,
        user,
        agency,
        description,
        numOfChildren,
        birthdays
      },
      { new: true }
    )
      .lean()
      .then(family => res.json(family))
      .catch(next);
  });
