import mongoose from 'mongoose';

const requestedAppointmentSchema = new mongoose.Schema({
  startDateTime: {
    type: Date,
    required: [true, 'Start date and time are required.']
  },
  endDateTime: {
    type: Date,
    required: [true, 'End date and time are required.']
  },
  birthdays: [
    {
      type: String,
      required: [true, 'children\'s birthdays are required.'],
      max: 17
    }
  ],
  appointmentComments: String,
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  family: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FamilyProfile',
    required: [true, 'Family is required']
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: [true, 'Agency is required']
  },
  requestedNannies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NannyProfile',
      required: [true, 'At least one requested nanny is required']
    }
  ],
  createdDate: {
    type: Date,
    default: Date.now()
  },
  numOfChildren: {
    type: Number,
    min: 1,
    required: [true, 'Number of children is required.']
  },

});

export default mongoose.model(
  'RequestedAppointment',
  requestedAppointmentSchema
);
