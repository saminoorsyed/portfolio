const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:      {type: String, required: true, unique: true},
    content:    {type: String, required: true},
    genre:      {type: String},
    pic:        {type: String, default: "https://icon-library.com/icon/tech-icon-png-3.html.html"},
    author:     {type: mongoose.Schema.Types.ObjectId, ref: "User"}
},
{
timestamps:true
});


const Post = mongoose.model("Post", postSchema);
module.exports = Post;