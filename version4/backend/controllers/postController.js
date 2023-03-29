"use strict"; 
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// import model
const Post = require("../models/postModel");

const createPost = asyncHandler(async(req, res)=> {
    // destructure contents of the body
    const {title, content, pic, author, genre, authorName } = req.body;
    // throw an error if any necessary parts of the body are missing
    if (!title || !content || !author){
        res.status(400);
        throw new Error("Post is missing necessary parts either title, content or author")
    };
    
    const postExists = await Post.findOne({title});

    // if a post is found with that title, throw an error
    if (postExists){
        res.status(400);
        throw new Error("A post with that title already exists")
    };

    // create new post with post schema method
    const post = await Post.create({
        title,
        content,
        genre,
        pic,
        author,
        authorName
    });

    if (post){
        // success
        res.status(201).send({message: "Post created successfully"})
    } else {
        res.status(400);
        throw new Error("Unable to create post in the database")
    };
});



// send posts by genre
const postsByGenre = asyncHandler(async(req,res) =>{
    try{
        const keyword = req.query.search
            ? {
                genre:{$regex: req.query.search, $options: 'i'}
            }:{};
        const posts = await Post.find(keyword)
        res.status(200).send(posts)
    }catch(error){
        res.status(400)
        throw new Error("unable to retrieve posts from database")
    }
});

const deletePost = asyncHandler(async(req, res)=>{
    try{
        const {_id}= req.body;
        await Post.deleteOne({ _id:_id });
        res.status(200).send("blog post deleted")
    }catch(error){
        res.status(400);
        throw new Error("unable to delete post in database")
    }
});

module.exports = {createPost, postsByGenre, deletePost}
