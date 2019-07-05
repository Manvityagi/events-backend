const mongoose = require('mongoose'),
      Venue    = require('./venue');

cell_obj = {                             // How to make sure that this is gonna be the structure of ecah object entered in the table
    ticketSold: {
        type: Number,
    },
    bookingType: {
        type: String,
    },
    bookingPrice: {
        type: Number,
    }
}

const rows = 25,  //1state + 24slots + 1date + 1totalPrice
      cols = 365; //1timeslot + 365 days

let slot_date_2D_arr = new Array(rows);

for(let i = 0; i < slot_date_2D_arr.length; i++) {
    slot_date_2D_arr[i] = new Array(cols);
}


const bookingSchema = new mongoose.Schema({
    //how to ensure combination of venueId & screen is unique
    venueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Venue
    },
    screen: {
        type: Number // this should be extracted on frontend from venueID 
    },
    maxUsers: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    slot_price_table: {
        type: Array,
        table: slot_date_2D_arr

        // https://stackoverflow.com/questions/23476239/mongoose-schema-workaround-for-multidimensional-array?lq=1
        // https://stackoverflow.com/questions/22223345/multi-dimensional-array-in-mongoose-schema
    }




})