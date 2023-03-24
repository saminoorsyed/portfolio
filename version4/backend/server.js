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
// middleware
const {notFound, errorHandler} = require('./middleware/middlewareErrors');



dotenv.config();
connectDB()
const app = express();

app.use(express.json()); // allows server to accept json data

app.get('/', (req, res) =>{
    res.send("api is Running");
});

app.use('/api/user', userRoutes);
// app.use('/api/blog', blogRoutes)
app.use('/api/posts', postRoutes);

// error routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on port ${PORT}`.yellow.bold));