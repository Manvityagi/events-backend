const createError = require('http-errors'),
      express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      methodOverride = require("method-override");
     
mongoose.set('useFindAndModify', false);

const venueRouter = require('./routes/venue'),
      eventRouter = require('./routes/event');
      

mongoose.connect('mongodb://localhost/EVENTS' ,{useNewUrlParser: true})


const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use(venueRouter);
app.use(eventRouter);

const port = process.env.PORT || 5000;
app.listen(port , () => console.log('App listening on port ' + port));

