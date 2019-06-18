const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
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