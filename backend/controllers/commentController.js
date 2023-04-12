// comment controller for users to create, update and delete comments
// also for website to display under each post
"use strict"
const asyncHandler = require("express-async-handler");

const Comment = require("../models/commentModel");

const createComment = asyncHandler(async(req, res)=>{
    const {post_id, content} = req.body;
    const username = req.user.name
    const user_id = req.user._id
    if (!username || !user_id || !post_id || !content){
        res.status(400)
        throw new Error("Comment is missing necessary parts.")
    };

    const comment = await Comment.create({
        username,
        user_id,
        post_id,
        content
    });
    if (comment){
        res.status(201).send({message:"comment created successfully"})
    } else {
        res.status(400);
        throw new Error("Unable to create comment in database")
    }
});

const getCommentsByPost = asyncHandler(async(req, res)=>{
    const postId = req.query.post
    try{
    const comments = await Comment.find({post_id: postId})
    res.send(comments)
    }catch(error){
        console.error(error);
        res.status(500).json({message:"unable to fetch comments"})
    }
});

const deleteCommentById = asyncHandler(async(req, res)=>{
    try{
      // if the logged in user matches the user_id of the comment in the db or the user is an author
      const comment = await Comment.findOne({ _id: req.body._id });
      if (!comment){
        res.status(404).send("comment not found");
        return;
      }
    //   using .equals() method allows the comparison of mongo db unique strings
      if (req.user._id.equals(comment.user_id) || req.user.author) {
        const { _id } = req.body;
        await Comment.deleteOne({ _id: _id });
        res.status(200).send("Comment deleted");
      } else {
        res.status(401).send("user is not authorized to delete comment");
      }
    }catch(error){
        console.error(error);
        res.status(500).json({message:"unable to delete message"})
    }
})

module.exports = {createComment, getCommentsByPost, deleteCommentById}