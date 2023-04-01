const express = require('express');
const router = express.Router();

// import controller functions

const {createProject, projectByGenre, updateProject, deleteProject} = require("../controllers/projectController");
const { isAuthor } = require("../middleware/authMiddleware");

// crud routes

router
  .route("/")
  .post(isAuthor, createProject)
  .get(projectByGenre)
  .delete(isAuthor, deleteProject)
  .put(isAuthor, updateProject);

  module.exports = router;