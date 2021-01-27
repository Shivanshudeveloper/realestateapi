const mongoose = require('mongoose');

const usersPropertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    amountCharged: {
        type: String,
        required: true
    },
    bedroom: {
        type: String,
        required: true
    },
    kitchen: {
        type: String,
        required: true
    },
    garden: {
        type: String,
        required: true
    },
    restroom: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    googlemaps: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    photoDownloadUrl1: {
        type: String,
        required: true
    },
    photoDownloadUrl2: {
        type: String,
        required: true
    },
    photoDownloadUrl3: {
        type: String,
        required: true
    },
    photoDownloadUrl4: {
        type: String,
        required: true
    },
    photoDownloadUrl5: {
        type: String,
        required: true
    },
    photoDownloadUrl6: {
        type: String,
        required: true
    },
    photoDownloadUrl7: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const propertys = mongoose.model('property', usersPropertySchema)
module.exports = propertys