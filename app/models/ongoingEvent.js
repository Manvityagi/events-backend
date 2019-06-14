const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ongoingEventSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Event
    },
    ticketId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Ticket
    }]

});

module.exports = mongoose.model("ongoingEvent",eventSchema);