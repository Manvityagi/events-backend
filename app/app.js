const express        = require('express'),
      mongoose       = require('mongoose'),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      passport       = require('passport'),
      User           = require('./models/user'),
      LocalStrategy  = require('passport-local');

      
mongoose.connect('mongodb://localhost/EVENTS' ,{useNewUrlParser: true})

const app = express();
     
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//  Connect all our routes to our application
const routes = require('./routes/index');
app.use('/', routes);
      
// view engine setup
app.set('view engine', 'ejs');
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));


////////////////////////////////////////////////////PASSPORT SETUP///////////////////////////////////////////////////////////////////////////////
app.use(require("express-session")({
    secret: "secret shall remain a secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 5000;
app.listen(port , () => console.log('App listening on port ' + port));

