const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    favgenres: {
        type: Array,
        require: true
    },
    following: {
        type: Array, 
        required: true,
    },
    followers: {
        type: Array,
        required: true,   
    },
    description: {
        type: String,
        require: true
    }
});
module.exports = User = mongoose.model("user", UserSchema);