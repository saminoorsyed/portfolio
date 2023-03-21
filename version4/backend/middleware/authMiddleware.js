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

module.exports = {protect};