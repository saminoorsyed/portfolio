const express = require('express');
const router = express.Router();

const {createComment, getCommentsByPost, deleteCommentById} = require("../controllers/commentController");
const {protect} = require("../middleware/authMiddleware");

router.route('/')
        .post(protect, createComment)
        .get(getCommentsByPost)
        .delete(protect, deleteCommentById)

module.exports = router;