"use strict"; 
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// import model
const Post = require("../models/postModel");

const createPost = asyncHandler(async(req, res)=> {
    // destructure contents of the body
    const {title, content, pic, author, genre } = req.body;
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

    // import Post Model from schema

    const post = await Post.create({
        title,
        content,
        genre,
        pic,
        author,
    });

    if (post){
        // success
        res.status(201).send({message: "Post created successfully"})
    } else {
        res.status(400);
        throw new Error("Unable to create post in the database")
    };
});

// search post titles or content
const allPosts = asyncHandler(async(req, res) =>{
    const keyword = req.query.search
        ? {
            $or: [
                {title:     {$regex: req.query.search, $options: 'i'}},
                {content:   {$regex: req.query.search, $options: 'i'}},
                {genre:     {$regex: req.query.search, $options: 'i'}}
            ],
        }:{};

    const posts = await Post.find(keyword).findIndex(_id)
    res.send(posts);
});

const isAuthor =asyncHandler(async(req,res) => {
    res.send("working");
});


module.exports = {createPost, allPosts, isAuthor}
