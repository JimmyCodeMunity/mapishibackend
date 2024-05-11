const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model/Product');
const upload = require('../utils/stogareConfig')


const createProduct = async (req, res) => {
    try {
        const { productname, price, description } = req.body;
        const images = req.files.map(file => file.filename);


        const product = await Product.create({
            productname,
            price,
            description,
            image:images
        })
        res.status(200).json({ message: 'new product added successfully',product });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'We experienced and error while creating product.Please try again.\u{1F625}' })

    }
}

//see all products

const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error fetching products' })
    }
}


const getProductById = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}
module.exports = {
    createProduct,
    getProducts,
    getProductById
}