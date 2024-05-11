// models/Product.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
