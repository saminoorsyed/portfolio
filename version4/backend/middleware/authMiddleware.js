const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async(req,res,next)=>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            // the token looks like "Bearer tokenasdagsd..." so we include the index 1
            token = req.headers.authorization.split(" ")[1];
            // decode token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // finds and returns the user without the password hence "select('-password')"
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("No authorized token provided");
        }
    }
    if (!token){
        res.status(401)
        throw new Error("No token provided");
    }
});

// checks that id stored in token matches id of authorized author in the database
const isAuthor = asyncHandler(async(req,res,next)=>{
    let token;
    // check that there is a header and it is bearer token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            // the token looks like "Bearer tokenGoesHere..." so we split into 2 lists and take the second index of 1
            token = req.headers.authorization.split(" ")[1];
            // decode token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // get the user info related to 
            req.user = await User.findById(decoded.id).select("-password");
            if (req.user.author){
                next();
            } else if (!req.user.author){
                throw new Error ("This user is not an author")
            }
        } catch (error) {
            res.status(401);
            if (error.message === "This user is not an author"){
                res.send(error.message)
            }else{
                throw new Error("No authorized token provided");
            }
        }
    }
});


module.exports = {protect, isAuthor};