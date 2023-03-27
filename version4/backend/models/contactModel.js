const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    header:     {type: String, required: true, unique: true},
    message:    {type: String, required: true},
    userName:   {type: String, required: true},
    email:      {type: String, required:true},
},
{
timestamps:true
});


const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;