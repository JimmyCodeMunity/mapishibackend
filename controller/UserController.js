const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/UserModel')
const multer = require('multer');
const path = require('path');




const createUser = async (req, res) => {
    try {
        const { username, email, phone, address, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                phone,
                address,
                password: hashedPassword
            })
            res.status(200).json({ message: "User created Successfully" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating new user" });

    }

}


//user login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "email not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "incorrect credentials.Please try again." })
        }

        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET, { expiresIn: 3600 });
        const response = {name:user.username,email:user.email,phone:user.phone,id:user._id,token:token};

        
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Login failed' });

    }

}

//get all the users
const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "data not located" })

    }
}

module.exports = {
    createUser,
    userLogin,
    getAllUsers
}