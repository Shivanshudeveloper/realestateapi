const mongoose = require('mongoose');

const usersPaymentSchema = new mongoose.Schema({
    propertyId: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    properties: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const payments = mongoose.model('payments', usersPaymentSchema)
module.exports = payments