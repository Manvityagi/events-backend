const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
    //incomplete

});

module.exports = mongoose.model("Ticket",ticketSchema);