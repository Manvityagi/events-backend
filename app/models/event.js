const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Venue  = require('./venue');


const eventSchema = new Schema({
    state: {
        
        // draftEvent: {
        //     type: Boolean
        //     //defalut value  true
        // } ,
        // minReached: false,
        // ongoingEvent: false,
        // pastEvent: false,
        // cancelledEvent: false,
        // // type: Boolean
    },
    name: {
        type: String,
        required: true
    },  
    desc: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Venue,
        required: true
    },
    time: {
        timeSlot: {
            startTime: String,
            endTime: String,
        },
        date: {
            type: Date
        },
        required: true
    },
    ticketMRP: {
        type: Number,
        required: true
    },
    minParticipation: {
        type: Number,
        required: true
    },
    maxParticipation: {
        type: Number,
        required: true
    },
    Amenities: [
        String
    ],
    type: {
        type: String,
        required: true
    },
    additonalNote: {
        type: String
    },
    rules: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Venue,
        required: true
    }
});


module.exports = mongoose.model("Event",eventSchema);




