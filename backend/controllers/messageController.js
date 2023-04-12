"use strict"; 
const asyncHandler = require("express-async-handler");
// import model
const Message = require("../models/messageModel");

const createMessage = asyncHandler(async(req, res)=> {
    // destructure contents of the body
    const {header, content, name, email} = req.body;
    // throw an error if any necessary parts of the body are missing
    if (!header|| !content || !name || !email){
        res.status(400);
        throw new Error(`Contact is missing necessary parts either header, content, name, or email`)
    };

    // create new Message with Contact schema method
    const mess = await Message.create({
        header,
        content,
        name,
        email
    });

    if (mess){
        // success
        res.status(201).send({message: "message created successfully"})
    } else {
        res.status(400);
        throw new Error("Unable to send message to Sami")
    };
});



// send Contacts by genre
const getMessages = asyncHandler(async(req,res) =>{
    const messages = await Message.find({})
    res.send(messages)
});

const deleteMessage = asyncHandler(async(req, res)=>{
    try{
        const {_id}= req.body;
        await Message.deleteOne({ _id:_id });
        res.send("success!")
    }catch(error){
        res.send("failed to delete message")
    }
});


module.exports = {createMessage, getMessages, deleteMessage}
