const express = require('express');
const { createProduct, getProducts,getProductById } = require('../controller/ProductController');


const router = express.Router();
router.use(express.json());

//allow url encoding
router.use(express.urlencoded({extended:false}))

//create user router
router.post('/createproduct',createProduct);

//get  user router
router.get('/allproducts',getProducts);

//get product by id
router.get('/allproducts/:id',getProductById)

//user account login
// router.post('/userlogin',userLogin);

module.exports = router;