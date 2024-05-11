// controllers/productController.js

const Cart = require('../model/Cart');

// Function to add a product
const addToCart = async (req, res) => {
    try {
        const { id, name, price, image } = req.body;
        
        // Check if product with the same id already exists
        const existingProduct = await Cart.findOne({ id,name });
        if (existingProduct) {
            return res.status(400).json({ error: 'Product with the same id already exists' });
        }

        const product = new Cart({
            id,
            name,
            price,
            image
        });
        
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Error adding product' });
    }
};

module.exports = {
    addToCart
};
