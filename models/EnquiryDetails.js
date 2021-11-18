const mongoose = require('mongoose');

const usersEnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })
const enquirydetails = mongoose.model('enquirydetails', usersEnquirySchema)
module.exports = enquirydetails