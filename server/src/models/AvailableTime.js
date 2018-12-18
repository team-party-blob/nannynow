import mongoose from 'mongoose';

const AvailableTimeSchema = new mongoose.Schema({
  availableStartTime: {
    type: Date,
    required: [true, 'Start date and time are required.']
  },
  availableEndTime: {
    type: Date,
    required: [true, 'End date and time are required.']
  },
  nanny: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Nanny is required']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('AvailableTime', AvailableTimeSchema);
