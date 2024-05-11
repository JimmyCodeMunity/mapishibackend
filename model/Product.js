// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String
    },
    price: {
        type: Number,
    },
    image: [String],
    description: {
        type: String
    },
    inStock: {
        type: String,
        default: 'available'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

