import { Router } from 'express';
import Agency from '../../models/Agency';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/', requireAuth(['admin']), (req, res, next) => {
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
  })

  .get('/', requireAuth(['admin']), (req, res, next) => {
    console.log('get', res.body);
    Agency.find()
      .lean()
      .then(agencys => res.json(agencys))
      .catch(next);
  })

  .get('/:id', requireAuth(['admin']), (req, res, next) => {
    const { id } = req.params;

    Agency.findById(id)
      .then(agency => res.json(agency))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    const { id } = req.params;

    Agency.findByIdAndDelete(id)
      .then(results => res.json({ removed: !!results }))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
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
  });
