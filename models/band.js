const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BandSchema = new Schema({
    bandname: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    members: {
        type: Array,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    genre: {
        type: String,
        require:true
    }
});
module.exports = Band = mongoose.model("band", BandSchema);