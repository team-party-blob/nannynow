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
  requestedNannies: [
    {
      nanny: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'At least one requested nanny is required']
      },
      status: {
        type: String,
        enum: ['no response', 'accepted', 'declined'],
        default: 'no response'
      }
    }
  ],
  closed: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model(
  'RequestedAppointment',
  requestedAppointmentSchema
);
