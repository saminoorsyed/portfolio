const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user_id:    {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    username:   {type:String, required:true},
    post_id:    {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
    content:    {type: String, required: true},
},
{
timestamps:true
});


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;