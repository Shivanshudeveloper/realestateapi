const mongoose = require('mongoose');

const usersenquerySchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    propertyid: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const enquery = mongoose.model('enquery2', usersenquerySchema)
module.exports = enquery