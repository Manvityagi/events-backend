const express        = require('express'),
      mongoose       = require('mongoose'),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      passport       = require('./passport'),
      app = express();

const auth = require('./routes/auth');
app.use('/auth', auth);
// mongoose.connect('mongodb+srv://Manvi_Tyagi:manvi8384@cluster0-lwpy4.mongodb.net/test?retryWrites=true&w=majority' ,{useNewUrlParser: true}, (err) =>{
//     if(err)
//     console.log(err);
//     else
//     console.log("mongo atlas connected")
// });
      

mongoose.connect('mongodb://localhost/EVENTS' ,{useNewUrlParser: true})
     
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


app.use('/', routes);
const port = process.env.PORT || 5000;
app.listen(port , (err) => {
    if(err)
    console.log(err);
    else
    console.log('App listening on port ' + port)
}
);

