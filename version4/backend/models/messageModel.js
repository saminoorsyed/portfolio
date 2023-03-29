const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    header:     {type: String, required: true},
    content:    {type: String, required: true},
    name:       {type: String, required: true},
    email:      {type: String, required: true},
},
{
timestamps:true
});


const Message = mongoose.model("Message", messageSchema);
module.exports = Message;