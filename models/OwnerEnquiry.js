const mongoose = require('mongoose');

const ownerEnquirySchema = new mongoose.Schema({
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
    },
    propertyid: {
        type: String,
        required: true
    }
}, { timestamps: true })
const ownerenquiry = mongoose.model('ownerenquiry', ownerEnquirySchema)
module.exports = ownerenquiry