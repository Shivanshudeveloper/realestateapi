const mongoose = require('mongoose');

const userspropertiesSchema = new mongoose.Schema({
    propertyfor: {
        type: String,
        required: false
    },
    propertytype: {
        type: String,
        required: false
    },
    propertystate: {
        type: String,
        required: false
    },
    propertyname: {
        type: String,
        required: false
    },
    bedroom: {
        type: String,
        required: false
    },
    bathroom: {
        type: String,
        required: false
    },
    balconies: {
        type: String,
        required: false
    },
    superarea: {
        type: String,
        required: false
    },
    carpetarea: {
        type: String,
        required: false
    },
    floor: {
        type: String,
        required: false
    },
    furnished: {
        type: String,
        required: false
    },
    rentalprice: {
        type: String,
        required: false
    },
    depositprice: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    ownertype: {
        type: String,
        required: false
    },
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
    bhk: {
        type: String,
        required: false
    },
    constructionyear: {
        type: String,
        required: false
    },
    wateravailabe: {
        type: String,
        required: false
    },
    carparkingavailable: {
        type: String,
        required: false
    },
    liftavailabe: {
        type: String,
        required: false
    },
    electricityavailabe: {
        type: String,
        required: false
    },
    features: {
        type: Array,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    propertyphotos: {
        type: Array,
        required: false
    }
})
const properties = mongoose.model('properties', userspropertiesSchema)
module.exports = properties