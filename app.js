const express        = require('express'),
      mongoose       = require('mongoose'),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      passport       = require('passport'),
      User           = require('./models/user'),
      Client         = require('./models/client'),
      Admin          = require('./models/admin'),
      LocalStrategy  = require('passport-local');

    //   const MongoClient = require('mongodb').MongoClient;
    //   const uri = "mongodb+srv://Manvi_Tyagi:manvi8384@cluster0-lwpy4.mongodb.net/test?retryWrites=true&w=majority";
    //   MongoClient.connect(uri,{ useNewUrlParser: true }, function(err, client) {
    //     if(err) {
    //          console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    //     }
    //     console.log('Connected to mongodb atlas');
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     client.close();
    //  });
      
mongoose.connect('mongodb+srv://Manvi_Tyagi:manvi8384@cluster0-lwpy4.mongodb.net/test?retryWrites=true&w=majority' ,{useNewUrlParser: true}, (err) =>{
    if(err)
    console.log(err);
    else
    console.log("mongo atlas connected")
});
      

//mongoose.connect('mongodb://localhost/EVENTS' ,{useNewUrlParser: true})

const app = express();
     
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//  Connect all our routes to our application
const routes = require('./routes/index');

      
// view engine setup
app.set('view engine', 'ejs');
app.use(methodOverride("_method"))
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

////////////////////////////////////////////////////PASSPORT SETUP///////////////////////////////////////////////////////////////////////////////
app.use(require("express-session")({
    secret: "secret shall remain a secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser()); 

passport.use(Client.createStrategy());
passport.serializeUser(Client.serializeUser());
passport.deserializeUser(Client.deserializeUser()); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use('/', routes);
const port = process.env.PORT || 5000;
app.listen(port , (err) => {
    if(err)
    console.log(err);
    else
    console.log('App listening on port ' + port)
}
);

