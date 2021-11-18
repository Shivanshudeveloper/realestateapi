const mongoose = require('mongoose');

const usersreferformSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    review: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
},{ timestamps: true })
const referform = mongoose.model('referform', usersreferformSchema)
module.exports = referform