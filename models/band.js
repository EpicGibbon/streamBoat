const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BandSchema = new Schema({
    bandname: {
        type: String,
        require: true
    },
    bandlocation: {
        type: String,
        require: true
    },
    bandmembers: {
        type: String,
        require: true
    },
    bandemail: {
        type: String,
        require: true
    },
    bandgenre: {
        type: Array,
        require: true
    },
    // images: {
    //     type: Array,
    //     require: false
    // },
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