const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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



module.exports = mongoose.model("Client",clientSchema);