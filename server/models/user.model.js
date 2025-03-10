const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [ true, "name is required" ]
    },
    age: {
        type: Number,
        min : [ 1, "You must be at least 1 or older to register" ]
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;