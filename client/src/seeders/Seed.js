let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const artists = [{
    firstname: "bob",
    lastname: "marley",
    email: "bobmarley123@gmail.com",
    password: "123",
    username: "BobMarley"

}, {
    firstname: "Jeff",
    lastname: "Rosen",
    email: "JeffRosen@gmail.com",
    password: "123",
    username: "JeffRosay"

}, {
    firstname: "Brittany",
    lastname: "Spears",
    email: "BSpears@yahoo.com",
    password: "123",
    username: "BSpears"

}, {
    firstname: "Yelo",
    lastname: "Wolf",
    email: "Yelowolf@gmail.com",
    password: "123",
    username: "Yelawolf"
}
]