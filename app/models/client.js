const mongoose              = require('mongoose'),
      passportLocalMongoose = require('passport-local-mongoose');
      


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
    hostedEvents : {
        //reference to Events Model
    },
    contact : {
        type : Number,
        //required : true,
    }
});

clientSchema.plugin(passportLocalMongoose,{ usernameField : 'email' });

module.exports = mongoose.model("Client",clientSchema);