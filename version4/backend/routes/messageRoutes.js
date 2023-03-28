const express = require('express');
const router = express.Router();

// import controller functions
const {createMessage, getMessages, deleteMessage} = require("../controllers/messageController");
const {protect, isAuthor} = require("../middleware/authMiddleware");

// routes to create edit or delete a post or retrieve posts
router.route('/').post(protect, createMessage).get(isAuthor, getMessages).delete(isAuthor, deleteMessage);

module.exports = router;