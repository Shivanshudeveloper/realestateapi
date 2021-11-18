const mongoose = require('mongoose');

const userswishlistSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: false
    },

    product: {
        type: Object,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const wishlists = mongoose.model('wishlist', userswishlistSchema)
module.exports = wishlists