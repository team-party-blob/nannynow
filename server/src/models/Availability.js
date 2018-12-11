import mongoose from 'mongoose';

const AvailabilitySchema = new mongoose.Schema({
  availabilityStartTime: {
    type: Date,
    required: [true, 'Start date and time are required.']
  },
  availabilityEndTime: {
    type: Date,
    required: [true, 'End date and time are required.']
  },
  nanny: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NannyProfile',
    required: [true, 'At least one nanny is required']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('Availability', AvailabilitySchema);
