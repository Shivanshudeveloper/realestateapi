const mongoose = require('mongoose');

const usersEnquirySchema = new mongoose.Schema({
    referralname: {
        type: String,
        required: true
    },
    referralphone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },

    checked: {
        type: String,
        required: true
    }
},{ timestamps: true })
const ReferralFormDetails = mongoose.model('ReferralFormDetails', usersEnquirySchema)
module.exports = ReferralFormDetails