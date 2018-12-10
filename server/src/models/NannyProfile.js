import mongoose, { Schema, model } from 'mongoose';

const nannyProfileSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  agencyId: {
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
    type: String
  },
  pricePerHour: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

export default model('NannyProfile', nannyProfileSchema);
