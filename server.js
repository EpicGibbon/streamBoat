const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");
const routes = require("./routes");
const profile = require( './routes/profile' )
const app = express();
app.use( '/api/profile', profile );
// middleware to parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};
// || "mongodb+srv://CamGram:camg1023@cluster0.hqiad.mongodb.net/sboat?retryWrites=true&w=majority",
// connect to Mongo DB 

mongoose.connect(config.MONGO_URI || "mongodb://heroku_q63rw0x5:phan1q8chu2cfv5pej3ukpi8lq@ds149616.mlab.com:49616/heroku_q63rw0x5", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })


    .then(() => console.log(`Mongo DB Succesfully Connected`))
    .catch(err => console.log(err));

// use routes
app.use(routes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// start server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})