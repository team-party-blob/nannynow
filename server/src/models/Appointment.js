import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  arrivalTime: {
    type: Date,
  },
  departureTime: {
    type: Date,
  },
  family: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Family is required']
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: [true, 'Agency is required']
  },
  nanny: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'At least one nanny is required']
  },
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NannyProfile',
    required: [true, 'At least one nanny is required']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  agencyFeePerHour: {
    type: Number,
    required: [true, 'An hourly agency fee is required']
  },
  nannyPricePerHour: {
    type: Number,
    required: [true, 'An hourly nanny price is required']
  },
  projectedNannyPayment: Number,
  projectedAgencyPayment: Number,
  finalNannyPayment: Number,
  finalAgencyPayment: Number
});

export default mongoose.model('Appointment', AppointmentSchema);
