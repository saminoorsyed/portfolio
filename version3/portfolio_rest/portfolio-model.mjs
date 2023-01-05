import mongoose from 'mongoose';
import 'dotenv/config';

// connect to the database
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);'', 0

const db = mongoose.connection;

db.once("open", (err) => {
    if(err){
        resizeBy.status(500).json({error: '500:Connection to the server failed.'})
    }else {
    console.log("Successfully connected to MongoDB using Mongoose!");
    }
});


// Schemas:

const techSchema = mongoose.Schema({
    name:       { type: String, required: true },
    imageLoc:   { type: String, required: true },
    genre:      { type: String, required: true },
});

//compile the model from schema after defining schema
const Tech = mongoose.model("Tech", techSchema);

// to create a new movie document in database
const createTech = async (name, imageLoc, genre) => {
    const tech = new Tech({ 
        name: name, 
        imageLoc: imageLoc,
        genre: genre 
    });
    return tech.save();
}

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const findTech = async (filter) => {
    const query = Tech.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findTechById = async (_id) => {
    const query = Tech.findById(_id);
    return query.exec();
}

// DELETE model based on ID  *****************************************
const deleteTechById = async (_id) => {
    const result = await Tech.deleteOne({_id: _id});
    return result.deletedCount;
};


// REPLACE model *****************************************************
const replaceTech = async (_id,name, imageLoc, genre) => {
    const result = await Tech.replaceOne({_id: _id }, {
        name: name, 
        imageLoc: imageLoc,
        genre: genre
    });
    return result.modifiedCount;
}



// Export our variables for use in the controller file.
export { createTech, findTech, findTechById, replaceTech, deleteTechById }