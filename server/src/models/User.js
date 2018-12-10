import mongoose from 'mongoose';
import { tokenize, untokenize, hash, compare } from '../utils/auth';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    role: {
      type: String,
      required: [true, 'Role must be admin, nanny, or family'],
      enum: ['admin', 'nanny', 'family']
    },
    createdDate: {
      type: Date,
      default: Date.now()
    },
    agency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agency',
      required: true
    },
    passwordHash: String
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.passwordHash;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  this.passwordHash = hash(this._tempPassword);
  next();
});

userSchema.methods.compare = function(password) {
  return compare(password, this.passwordHash);
};

userSchema.methods.authToken = function() {
  return tokenize(this);
};

userSchema.statics.findByToken = function(token) {
  return Promise.resolve(untokenize(token));
};

export default mongoose.model('User', userSchema);
