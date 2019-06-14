const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    },
    couponId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Coupon
    }]
});


module.exports = mongoose.model("User",userSchema);