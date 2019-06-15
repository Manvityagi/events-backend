const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new mongoose.Schema({
    venueName: {
        type : String,
        //required : true
    },
    address: {
        city: String,
        landmark: String,
        pinCode: Number,
        Street_no: String,
       // required: true
    },
    maxCapacity: {
        type: Number
    },
    rating: {
        type : Number
    },
    amenities: [
        String
    ],
    venueContact: {
        type : Number,
       // required : true,
    },
    image: [
        String                                
    ]
});

module.exports = mongoose.model("Venue",venueSchema);