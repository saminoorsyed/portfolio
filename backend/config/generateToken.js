const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    // jwt has three params {id} for a token, Secret for security and object to limit time token is valid 
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = generateToken