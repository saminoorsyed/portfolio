"use strict"
const { response } = require("express");
const asyncHandler = require("express-async-handler");
// import model
const Project = require("../models/projectModel")

// functions
const createProject = asyncHandler(async (req, res) => {
  const { title, description, genre, videoId, github, projectLink } = req.body;

  const projectExists = await Project.findOne({ title });

  if (projectExists) {
    res.status(400);
    throw new Error("A Project with that title already exists");
  }

  // create a new Project with the schema method
  const project = await Project.create({
    title,
    description,
    genre,
    videoId,
    github,
    projectLink,
  });

  if(project){
    res.status(201).send({message:"Project successfully created"})
  }else {
    res.status(400);
    throw new Error("Unable to create project in the database")
  }
});

const projectByGenre = asyncHandler(async(req, res)=>{
  try{
    const keyword = req.query.search
      ? {
          genre: { $regex: req.query.search, $options: "i" },
        }
      : {};
    const projects = await Project.find(keyword)
    res.status(200).send(projects)
  }catch(error){
    console.error(error)
    res.status(400).send({message:"Unable to retrieve Projects from data base"})
  }
})

const updateProject = asyncHandler(async (req, res) => {
  try {
    const { _id, title, description, genre, videoId, github, projectLink } =req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      _id,
      {
        $set: {
          title: title || undefined,
          description: description || undefined,
          videoId: videoId || undefined,
          github: github || undefined,
          projectLink: projectLink || undefined,
          genre: genre || undefined,
        },
      },
      { new: true }
    );

    if (updatedProject) {
      res.status(200).send(updatedProject);
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  } catch (error) {
    res.status(400);
    throw new Error("Unable to update Project in database");
  }
});

const deleteProject = asyncHandler(async(req, res)=>{
  try {
    const {_id}= req.body;
    await Project.deleteOne({_id:_id});
    res.status(200).send("project deleted")
  }catch(error){
    res.status(500);
    throw new Error("Unable to delete project from the database")
  }
})

module.exports = {createProject, projectByGenre, updateProject, deleteProject};