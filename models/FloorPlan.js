const mongoose = require('mongoose');

const floorplanSchema = new mongoose.Schema({
    suite: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    sqft: {
        type: String,
        required: false
    },
    baths: {
        type: String,
        required: false
    },
    maintenance: {
        type: String,
        required: false
    },
    floor: {
        type: String,
        required: false
    },
    occupancy: {
        type: String,
        required: false
    },
    propertytax: {
        type: String,
        required: false
    },
    view: {
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const floorplans = mongoose.model('floorplans', floorplanSchema)
module.exports = floorplans