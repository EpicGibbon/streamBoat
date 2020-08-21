const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Bands collection and inserts the bands below
console.log(db.Band);

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sboat")

const bandSeed = [
    {
        bandname: "Avengeful 7",
        location: "Orlando, FL",
        members: [{
            name: "Bob Saget",
            position: "Drummer"
        }, {
            name: "Jill Oldham",
            position: "Lead Vocalist"
        },
        {
            name: "Bob Bill",
            position: "Gutarist"
        }, {
            name: "Charlie Dinsmore",
            position: "Pianist"
        }
        ],
        email: "Avengeful7@gmail.com",
        genre: "Rock",
        images: "Insertedimg",
        description: "We are some badass mothafuckin rockstars",
        date: new Date(Date.now())
    },
    {
        bandname: "Distasteful Sickness",
        location: "Denver, CO",
        members: [{
            name: "Travis Barker",
            position: "Drummer"
        }, {
            name: "Howie Mandell",
            position: "Lead Vocalist"
        },
        {
            name: "Slash",
            position: "Gutarist"
        }, {
            name: "Beethoven",
            position: "Pianist"
        }
        ],
        email: "DistastefulSickness.com",
        genre: "Metal",
        images: "Inserted2ndimg",
        description: "We are some sick ass mothafuckin rockstars",
        date: new Date(Date.now())
    },
];

db.Band.collection.insertMany(bandSeed)
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });