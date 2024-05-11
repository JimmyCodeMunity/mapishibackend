const express = require('express');
const { createStaff, staffLogin, getAllStaff } = require('../controller/StaffController');


const router = express.Router();
router.use(express.json());

//allow url encoding
router.use(express.urlencoded({extended:false}))

//create user router
router.post('/createstaff',createStaff);

//get  user router
router.get('/allstaff',getAllStaff);

//user account login
router.post('/stafflogin',staffLogin);

module.exports = router;