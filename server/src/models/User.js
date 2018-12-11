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
  try {
    const user = untokenize(token);
    return Promise.resolve(user);
  } catch(e) {
    return Promise.resolve(null);
  }
};

const User = mongoose.model('User', userSchema);

export default User;
