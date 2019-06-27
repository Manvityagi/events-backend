const mongoose = require('mongoose'),
      Client   = require('./client');

const venueSchema = new mongoose.Schema({
    venueName: {
        type : String,
        //required : true
    },
    address: {
        city: String,
        locality: String,
        landmark: String,
        pinCode: Number,
        Street_no: String,
       // required: true
    },
    maxCapacity: {
        type: Number
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"

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