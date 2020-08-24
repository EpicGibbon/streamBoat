// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const config = require("../config");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Band
            .find(req.query)
            // .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Band
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Band
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Band
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeBand: function (req, res) {
        db.Band
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUserId: function (req, res) {
        db.Band
            .find({ createdby: req.params._id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    editUser: function (req, res) {
        db.User.find({ _id: req.params._id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    editUser: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeUser: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
















































    // async register(req, res) {

    //     try {

    //         const { email, bandname, location, members, description, genre, images } = req.body;
    //         // Check band enters all fields
    //         if (!email || !bandname || !location || !members || !genre) return res.status(400).json({ message: "Please enter all required fields" });
    //         // Check the band enters the right formatted email
    //         const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //         if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });

    //         // create new User object to be saved in Database
    //         const newBand = new Band({
    //             email,
    //             bandname,
    //             location,
    //             members,
    //             description,
    //             genre,
    //             images
    //         })

    //         // Check if user already exist
    //         const band = await Band.findOne({ email })
    //         if (band) return res.status(400).json({ message: "Email for band already registered. Please Login" });

    //     } catch (err) {
    //         throw err;
    //     }
    // },

    // async getBand(req, res) {
    //     try {
    //         // find user by id
    //         const band = await Band.findById(req.bandId)
    //         // send info to client
    //         res.json(band)
    //     } catch (err) {
    //         throw err;

    //     }
    // }
