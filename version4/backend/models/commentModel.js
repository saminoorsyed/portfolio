const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user:       {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    post:       {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
    content:    {type: String, required: true},
},
{
timestamps:true
});


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;