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

module.exports = mongoose.model("Event",eventSchema);




