import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
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
    required: [true, 'Nanny is required']
  },
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RequestedAppointment',
    required: [true, 'Request is required']
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

appointmentSchema.statics.findForUser = function(user, query = {}) {
  if(user.role === 'family') {
    return Appointment.find({ ...query, family: user._id });
  } else if(user.role === 'nanny') {
    return Appointment.find({ ...query, nanny: user._id });
  } else if(user.role === 'admin') {
    return Appointment.find(query);
  } else {
    return Promise.resolve([]);
  }
};

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
