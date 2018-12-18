import mongoose from 'mongoose';
import { getStates } from './helpers/listHelpers';

const agencySchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, 'Business name is required.']
  },
  contactName: {
    type: String,
    required: [true, 'Contact name is required.']
  },
  streetAddress1: {
    type: String,
    required: [true, 'Street address is required.']
  },
  streetAddress2: String,
  city: {
    type: String,
    required: [true, 'City is required.']
  },
  state: {
    type: String,
    required: [true, 'State is required.'],
    enum: getStates()
  },
  zip: {
    type: String,
    required: [true, 'ZIP code is required.']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required.']
  },
  businessEmail: {
    type: String,
    required: [true, 'Email is required']
  },
  website: String,
  hourlyFee: {
    type: Number,
    required: [true, 'Hourly fee is required']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  agencyAlias: {
    type: String,
    default: 'nwnannies'
  }
});

export default mongoose.model('Agency', agencySchema);
