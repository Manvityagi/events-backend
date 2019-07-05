const mongoose = require('mongoose'),
      Client   = require('./client'),
      Amenities = require('./amenity'); 

const venueSchema = new mongoose.Schema({
    venueName: {
        type : String,
        required : true
    },
    noOfScreens: {
        type : Number,
        required : true
    },
    street_block: {
        type : String,
        required : false
    },
    line1: {
        type : String,
        required : false
    },
    line2: {
        type : String,
        required : false
    },
    city: {
        type : String,
        required : true
    }, 
    state: {
        type : String,
        required : true
    },  
    country: {
        type : String,
        required : true
    },
    pinCode: {
        type : String,
        required : true
    },
    landmark: {
        type : String,
        required : false
    },
    eventType:{
        //bool // movie // comedy
        movie: Boolean,
        comedy: Boolean
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
//     amenities: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: Amenities
// }],
    venueContact: {
        type : Number,
       required : true,
    },
    image: [
        String                                
    ],
    verified: {
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model("Venue",venueSchema);