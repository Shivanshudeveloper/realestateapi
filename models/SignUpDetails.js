const mongoose = require('mongoose');

const SignupEnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/pinkblack/image/upload/v1619804032/defaultPic_rval8w.jpg"
    }
})
const Signupdetails = mongoose.model('Signupdetails', SignupEnquirySchema)
module.exports = Signupdetails