const express = require('express');
const router = express.Router();

// import controller functions
const {createPost, postsByGenre, deletePost, updatePost} = require("../controllers/postController");
const {isAuthor} = require("../middleware/authMiddleware");

// routes to create edit or delete a post or retrieve posts


router.route('/')
        .post(isAuthor,createPost)
        .get(postsByGenre)
        .delete(isAuthor, deletePost)
        .put(isAuthor, updatePost);

module.exports = router;