const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model("Coupon",couponSchema);