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
        require: true
    },
    images: {
        type: Array,
        require: false
    },
    description: {
        type: String,
        require: false
    },
    createdby: {
        type: String,
        require: false
    },
    date: {
        type: Date, default: Date.now
    }
});
const Band = mongoose.model("band", BandSchema);

module.exports = Band;