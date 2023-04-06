const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title:        { type: String, required: true, unique: true },
    description:  { type: String, required: true },
    genre:        { type: String, required: true },
    videoId:      { type: String, required: true },
    github:       { type: String, required: true },
    projectLink:  { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
