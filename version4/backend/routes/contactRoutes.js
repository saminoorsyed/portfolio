const express = require('express');
const router = express.Router();

// import controller functions
const {saveMessage, getMessages, deleteMessages} = require("../controllers/contactController");
const {protect, isAuthor} = require("../middleware/authMiddleware");

// routes to create edit or delete a post or retrieve posts


router.route('/').post(protect,saveMessage).get(isAuthor, getMessages).delete(isAuthor, deleteMessages);

module.exports = router;