const mongoose = require('mongoose');

const usersassistantplanchema = new mongoose.Schema({
    fullname: {
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
    propertyname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const assistantplan = mongoose.model('assistantplan', usersassistantplanchema)
module.exports = assistantplan