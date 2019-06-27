const mongoose              = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose'),
      Venue                 = require('../models/venue');
      


const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //required: true
    },
    lastName : {
        type : String,
        //required : false
    },
    email : {
        type : String,
        //required : true
    },
    venues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Venue
        }
    ],
    // hostedEvents :  [                                // how to do this thing - hostedEvents/upcoming/cancelled shall be 
    //                                                  //  kept separately in the clients table ideally, isnt it ?
    //     {                                            // i.e I want to refer only those Events from Events table with state successfull
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: Event                               // Why I want this bcz I want to calculate the number of these types of events in API
    //     }                                            //or shall I do the counting by searching statewise events in event array, that might be a bad idea
    // ],                                               // searching in an array
    // upcomingEvents: [
    //     {                                            //PLEASE HELP IN THIS TOO - SHALL I HAVE DIFFERENT COLLECTIONS OF SUCCESFULL EVENTS, CANCELLED ETC
    //                                                  // AS I HAVE ONLY 1 COLLECTION EVENT RYT NOW & I AM MAINTAINING STATES IN IT
    //     }
    // ],
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Event
        }
    ],
    contact : {
        type : Number,
        //required : true,
    }
});

clientSchema.plugin(passportLocalMongoose,{ usernameField : 'email' });

module.exports = mongoose.model("Client",clientSchema);