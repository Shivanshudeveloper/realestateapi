const mongoose = require('mongoose');

const usersFavoriteFloorSchema = new mongoose.Schema({
    floorId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    suite: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    sqft: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const favoritesfloor = mongoose.model('favoritefloor', usersFavoriteFloorSchema)
module.exports = favoritesfloor