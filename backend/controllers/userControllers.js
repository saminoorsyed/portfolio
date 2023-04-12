// import dependencies
const asyncHandler = require("express-async-handler");
const generateToken = require('../config/generateToken');
const axios = require('axios');
// import model
const User = require('../models/userModel');

const registerUser = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body;
    // throw an error if any parts of the body are missing
    if (!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the Fields");
    };
    
    const userExists = await User.findOne({email});
    // if a user is found with that email, throw an error
    if (userExists){
        res.status(400);
        throw new Error("User already exists");
    };

    // import User Model from schema
    const user = await User.create({
        name,
        email, 
        password,
    });

    if (user){
        // success
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email, 
            token: generateToken(user._id)
        });
    } else {
        // failure
        res.status(400);
        throw new Error("Unable to create user in the database");
    };
});

// to sign a user in
const authUser =asyncHandler(async(req,res) => {
    const{email, password} = req.body;
    const user = await User.findOne({email});
    // if credential match, send browser authorization info and bearer token
    if (user && (await user.matchPassword(password)) ){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            author: user.author, 
            token: generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error("Unable to find user in the database");
    };
});

//  /api/users?search=email (to search other users for future use)
const allUsers = asyncHandler(async(req,res) =>{
    const keyword = req.query.search 
        ? {
            $or:[
                // options 'i' means case insensitive
                {name: {$regex: req.query.search, $options: 'i'}},
                {email: {$regex: req.query.search, $options: 'i'}},
            ],
        }:{};

    const users = await User.find(keyword).find({_id:{$ne: req.user._id}});
    res.send(users);
});

const getPass = asyncHandler(async(req, res)=> {
    const response = await axios.get("http://localhost:4000/getPass");
    res.json({data:response.data})
})

module.exports = {registerUser, authUser, allUsers, getPass}