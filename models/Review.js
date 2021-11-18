const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/pinkblack/image/upload/v1619804032/defaultPic_rval8w.jpg"
    }
}, { timestamps: true })
const postreview = mongoose.model('postreview', reviewSchema)
module.exports = postreview