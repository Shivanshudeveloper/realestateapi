const mongoose = require('mongoose');

const plansDataSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    enquirefor: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const plans = mongoose.model('plans', plansDataSchema)
module.exports = plans