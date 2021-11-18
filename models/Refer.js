const mongoose = require('mongoose');

const usersreferSchema = new mongoose.Schema({
    ownerfullname: {
        type: String,
        required: true
    },
    ownercity: {
        type: String,
        required: true
    },
    ownerphone: {
        type: String,
        required: true
    },
    yourfullname: {
        type: String,
        required: true
    },
    yourphone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const refer = mongoose.model('refer', usersreferSchema)
module.exports = refer