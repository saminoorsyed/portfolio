"use strict"; 
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// import model
const Contact = require("../models/contactModel");

const createMessage = asyncHandler(async(req, res)=> {
    // destructure contents of the body
    const {header,message,userName,email} = req.body;
    // throw an error if any necessary parts of the body are missing
    if (!header|| !message || !userName||email){
        res.status(400);
        throw new Error("Contact is missing necessary parts either header, message, userName, or email")
    };

    // create new Message with Contact schema method
    const Message = await Contact.create({
        header,
        message,
        userName,
        email
    });

    if (Message){
        // success
        res.status(201).send({message: "message created successfully"})
    } else {
        res.status(400);
        throw new Error("Unable to send message to Sami")
    };
});



// send Contacts by genre
const getMessages = asyncHandler(async(req,res) =>{
    const keyword = req.query.search
        ? {
            username:{$regex: req.query.search, $options: 'i'}
        }:{};
    const Messages = await Contact.find(keyword)
    res.send(Messages)
});

const deleteMessages = asyncHandler(async(req, res)=>{
    const {_id}= req.body;
    Contact.deleteOne({ _id:_id });
})

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
};



module.exports = {createContact, ContactsByGenre}
