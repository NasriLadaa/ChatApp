const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: [true, "Username should be unique."],
        minlength: [3, "Username should be more than 3 chars."],
        maxlength: [50, "Username cannot be less than or equal 50 chars."],
      },
      email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email should be unique."],
        lowercase: [true, "Email should be Lowercase."],
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
      },
      password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [9, "Password cannot be equal or less than 9 chars."],
      },
      firstName: {
        type: String,
        maxlength: [50, "Firstname should be less than or equal 50 chars."],
      },
      lastName: {
        type: String,
        maxlength: [50, "Lastname should be less than or equal 50 chars."],
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
});

// Middleware to automatically update `updatedAt` on save
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
  });
  
const User = mongoose.model('users', UserSchema);

module.exports = User;