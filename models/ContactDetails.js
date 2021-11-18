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
    msg: {
        type: String,
        required: false,
        default: "---"
    },
    checked: {
        type: String,
        required: true
    }
}, { timestamps: true })
const contactdetails = mongoose.model('contactdetails', usersEnquirySchema)
module.exports = contactdetails