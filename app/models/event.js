const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    state: {
        draftEvent: {
            type: Boolean
            //defalut value  true
        } ,
        minReached: false,
        ongoingEvent: false,
        pastEvent: false,
        cancelledEvent: false,
        type: Boolean
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

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true
    },
    hostedEvents : {
        //reference to Events Model
    },
    contact : {
        type : Number,
        required : true,
    }
});


const offersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discount : {
        type : Number,
        required : true
    },
    otherDetails: {
       type : String 
    },

    applicableEvents: {
        //refs
    }
});

const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName : {
        type : String,
        required : false
    },
    discount : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true,
    }
});

module.exports = mongoose.model("Event",eventSchema);




