import mongoose from 'mongoose';
import { getStates } from './helpers/listHelpers';

const nannyProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String
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
    required: [true, 'State is required.']
  },
  description: {
    type: String
  },
  age: {
    type: Number
  },
  pricePerHour: {
    type: Number
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('NannyProfile', nannyProfileSchema);
