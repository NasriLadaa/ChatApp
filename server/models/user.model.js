const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: [true, "Username must be unique."],
    index:true,
    minlength: [3, "Username must be more than 3 chars."],
    maxlength: [50, "Username cannot be less than or equal 50 chars."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: [true, "Email must be unique."],
    lowercase: [true, "Email must be Lowercase."],
    validator: {
      validator: (val) => "/^([w-.]+@([w-]+.)+[w-]+)?$/".test(val),
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [9, "Password must be equal or less than 9 chars."],
  },
  firstName: {
    type: String,
    required: [true, "Firstname is required."],
    maxlength: [50, "Firstname must be less than or equal 50 chars."],
  },
  lastName: {
    type: String,
    required: [true, "Lastname is required."],
    maxlength: [50, "Lastname must be less than or equal 50 chars."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema
  .virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

userSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  if (!this.confirmPassword) {
    this.invalidate("confirmPassword", "Confirm password is required.");
  }
  next();
});

// Middleware to automatically update `updatedAt` on save
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
