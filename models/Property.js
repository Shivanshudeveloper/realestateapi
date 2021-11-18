const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
    "ap-address": {
        type: String,
        required: true
    },
    "ap-age-of-contruction": {
        type: String,
        required: true
    },
    "ap-amneties": {
        type: Array,
        required: true,

    },
    "ap-images": {
        type: Array,
        required: true
        // default: "https://res.cloudinary.com/pinkblack/image/upload/v1619804032/defaultPic_rval8w.jpg"
    },
    "ap-area": {
        type: String,
        required: true
    },
    "ap-bathrooms": {
        type: String,
        required: true
    },
    "ap-bedrooms": {
        type: String,
        required: true
    },
    "ap-carpet-area": {
        type: String,
        required: true
    },
    "ap-city": {
        type: String,
        required: true
    },
    "ap-description": {
        type: String,
        required: true
    },
    "ap-electricity-charge-inc": {
        type: String,
        required: true
    },
    "ap-email": {
        type: String,
        required: true
    },
    "ap-facing": {
        type: String,
        required: true
    },
    "ap-floor-no": {
        type: String,
        required: true
    },
    "ap-fn": {
        type: String,
        required: true
    },
    "ap-furnished-status": {
        type: String,
        required: true
    },
    "ap-monthly-charges": {
        type: String,
        required: true
    },
    "ap-monthly-rent": {
        type: String,
        required: true
    },
    "ap-monthy-charges-duration": {
        type: String,
        required: true
    },
    "ap-owner": {
        type: String,
        required: true
    },
    "ap-pets-allowed": {
        type: String,
        required: true
    },
    "ap-phone": {
        type: String,
        required: true
    },
    "ap-price-duration": {
        type: String,
        required: true
    },
    "ap-security-amount": {
        type: String,
        required: true
    },
    "ap-sn": {
        type: String,
        required: true
    },
    "ap-tenants-preferred": {
        type: String,
        required: true
    },
    "ap-title": {
        type: String,
        required: true
    },
    "ap-total-area": {
        type: String,
        required: true
    },
    "ap-total-floors": {
        type: String,
        required: true
    },
    "ap-property-available": {
        type: String,
        required: true
    },
    "ap-type": {
        type: String,
        required: true
    },
    "ap-zip": {
        type: String,
        required: true
    },
    "ap-car-parking": {
        type: String,
        required: true,
        default: 0
    },

}, { timestamps: true })
const property = mongoose.model('property', propertySchema)
module.exports = property