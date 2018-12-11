import mongoose from 'mongoose';
import { getStates } from './helpers/listHelpers';

const familyProfileSchema = new mongoose.Schema({
  name: {
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
    required: [true, 'State is required.']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: [true, 'Agency is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  numOfChildren: {
    type: Number,
    min: 1,
    required: [true, 'Number of children is required.']
  },
  birthdays: [
    {
      type: String,
      required: [true, 'children\'s birthdays are required.']
    }
  ]
});

export default mongoose.model('FamilyProfile', familyProfileSchema);
