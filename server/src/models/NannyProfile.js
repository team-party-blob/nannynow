import mongoose, { Schema, model } from 'mongoose';

const nannyProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  agency: {
    type: Schema.Types.ObjectId,
    ref: 'Agency',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
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

export default model('NannyProfile', nannyProfileSchema);
