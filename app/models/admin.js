const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Admin",adminSchema);

