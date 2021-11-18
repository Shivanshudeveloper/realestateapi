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
    },
    id: {
        type: String,
        required: true,
        default: "none"
    }
}, { timestamps: true })
const plandetails = mongoose.model('plandetails', usersEnquirySchema)
module.exports = plandetails