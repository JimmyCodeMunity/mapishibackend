const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
    

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    resetPasswordToken: String,
    resetPasswordTime: Date,

})

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;