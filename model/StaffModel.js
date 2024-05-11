const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
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
    
    profilepic:{
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    resetPasswordToken: String,
    resetPasswordTime: Date,

})

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;