const mongoose = require('mongoose');

// Creation of User schema
const userSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    displayName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    // Google specific
    googleId: {
      type: String,
      unique: true,
    },
    // GitHub specific
    gitHubId: {
      type: String,
      unique: true,
    }
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;