"use strict"; 
// import dependencies
const express = require('express');
const { application } = require('express');
const dotenv = require('dotenv');
const colors = require('colors'); //makes listening output stand out

// mongo db
const connectDB = require('./config/db');
// routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const messageRoutes = require('./routes/messageRoutes');
const commentRoutes = require('./routes/commentRoutes');
const projectRoutes = require('./routes/projectRoutes');
// middleware
const {notFound, errorHandler} = require('./middleware/middlewareErrors');



dotenv.config();
connectDB()
const app = express();

app.use(express.json()); // allows server to accept json data

app.get('/', (req, res) =>{
    res.send("api is Running");
});

// website functionality
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/projects', projectRoutes);
// error routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on port ${PORT}`.yellow.bold));