const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },  
    state: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    date: {
        type: Date
    },
    Amenities: [
        String
    ],
    type: {
        type: String
    }
       
});
const userSchema = new mongoose.Schema({
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
    password :{
        type : String,
        required : true
    },
    events : {
        //reference to Events Model
    },
    bookedEvents: {
       //reference to Events Model
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    location : {
        // coordinates
    },
    contact : {
        type : Number,
        required : true,
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




