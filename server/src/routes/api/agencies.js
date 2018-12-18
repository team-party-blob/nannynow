import { Router } from 'express';
import Agency from '../../models/Agency';
import requireAuth from '../../middleware/requireAuth';
import { HttpError } from '../../middleware/error';

export default Router()
  .post('/', requireAuth(['developer']), (req, res, next) => {
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
      hourlyFee,
      agencyAlias
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
      hourlyFee,
      agencyAlias
    })
      .then(agency => res.json(agency))
      .catch(next);
  })

  .get('/', requireAuth(['developer']), (req, res, next) => {
    Agency.find()
      .lean()
      .then(agencies => res.json(agencies))
      .catch(next);
  })

  .get('/:id', requireAuth(['admin', 'developer']), (req, res, next) => {
    const { id } = req.params;

    if(req.user.role === 'developer' || req.user.agency.toString() === id) {
      Agency.findById(id)
        .then(agency => res.json(agency))
        .catch(next);
    } else {
      next(new HttpError({ code: 403, message: 'User not apart of agency' }));
    }
  })

  .delete('/:id', requireAuth(['developer']), (req, res, next) => {
    const { id } = req.params;

    Agency.findByIdAndDelete(id)
      .then(results => res.json({ removed: !!results }))
      .catch(next);
  })

  .put('/:id', requireAuth(['admin']), (req, res, next) => {
    const { id } = req.params;
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

    if(req.user.role === 'developer' || req.user.agency.toString() === id) {
      Agency.findByIdAndUpdate(
        id,
        {
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
        },
        { new: true }
      )
        .lean()
        .then(agency => res.json(agency))
        .catch(next);
    } else {
      next(new HttpError({ code: 403, message: 'User not apart of agency' }));
    }
  });
