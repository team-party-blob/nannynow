import { Router } from 'express';
import Agency from '../../models/Agency';

export default Router()
  .post('/', (req, res, next) => {
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

  .get('/', (req, res, next) => {
    Agency.find()
      .lean()
      .then(agencys => res.json(agencys))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
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
    const { contactName } = req.body;

    Agency.findByIdAndUpdate(
      id,
      {
        contactName
      },
      { new: true }
    )
      .lean()
      .then(agency => res.json(agency))
      .catch(next);
  });
