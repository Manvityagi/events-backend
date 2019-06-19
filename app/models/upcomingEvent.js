const mongoose = require('mongoose');

const upcomingEventSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Event
    },
    ticketId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Ticket
    }]

});

module.exports = mongoose.model("upcomingEvent",eventSchema);