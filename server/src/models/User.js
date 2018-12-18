import mongoose from 'mongoose';
import { tokenize, untokenize, hash, compare } from '../utils/auth';
import NannyProfile from '../models/NannyProfile';
import FamilyProfile from '../models/FamilyProfile';
import Agency from './Agency';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Unique email is required'],
      unique: true
    },
    role: {
      type: String,
      required: [true, 'Role must be admin, nanny, family, or developer'],
      enum: ['admin', 'nanny', 'family', 'developer']
    },
    createdDate: {
      type: Date,
      default: Date.now()
    },
    agency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agency'
    },
    passwordHash: String
  },
  {
    toJSON: {
      transform: function(doc, ret) {
        delete ret.__v;
        delete ret.passwordHash;
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

userSchema.methods.getProfile = function() {
  if(this.role === 'family') {
    return FamilyProfile.findOne({ user: this });

  } else if(this.role === 'nanny') {
    return NannyProfile.findOne({ user: this });

  } else {
    return Promise.resolve(null);
  }
};

userSchema.methods.getAgencyId = function(requestBody) {
  if(this.role === 'developer') return mongoose.Types.ObjectId(requestBody.agency);

  return this.agency;
};

userSchema.methods.getAgency = function() {
  return Agency.findById(this.agency);
};

userSchema.statics.findByToken = function(token) {
  try {
    const user = untokenize(token);
    return Promise.resolve(User.hydrate(user));
  } catch(e) {
    return Promise.resolve(null);
  }
};

const User = mongoose.model('User', userSchema);

export default User;
