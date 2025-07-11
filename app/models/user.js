const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        lastName: {
            type: String
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        avatar: {
            type: String,
            default: 'https://cdn-icons-png.flaticon.com/512/12225/12225881.png'
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
);

module.exports = mongoose.model('User', userSchema);