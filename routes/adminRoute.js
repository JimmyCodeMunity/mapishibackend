const express = require('express');
const { createUser, userLogin, getAllUsers } = require('../controller/UserController');
const { createAdmin, adminLogin } = require('../controller/AdminController');


const router = express.Router();
router.use(express.json());

//allow url encoding
router.use(express.urlencoded({extended:false}))

//create user router
router.post('/authregister',createAdmin);

//get  user router
router.get('/allusers',getAllUsers);

//user account login
router.post('/authlogin',adminLogin);

module.exports = router;