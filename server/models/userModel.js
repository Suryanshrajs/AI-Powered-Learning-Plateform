const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    token: {
        type: String,
        default: null
    }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
