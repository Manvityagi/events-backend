const express = require('express'),
      router  = express.Router(),
      Event   = require('../models/event'),
      mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ankit:ankit@eventsite-kzwpg.mongodb.net/test?retryWrites=true&w=majority/EventSite', { useNewUrlParser: true }).catch(function(err){
        console.log(err);
});

// mongoose.connect('mongodb://localhost/EVENTS' ,{useNewUrlParser: true})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


// router.get("/events", (req,res)=> {
//   // var obj = {
//   //   city: req.body.city,
//   //   type: req.body.type,
//   //   date: req.body.date
//   // }

// //  if(req.body.time != null) {
// //    obj[time] = req.body.time
// //  }
// //  if(req.body.address != null) {
// //   obj[address] = req.body.address 
// // }
// // if(req.body.amenities != null) {
// //   obj[time] = req.body.time
// // }
//   const b = Event.find({
//     city: req.body.city,
//     type: req.body.type,
//     date: req.body.date
//   }, (err, docs) => {
//     if(err){
//       console.log(err);
//     }else{
//       console.log(docs);
//       res.json(docs);
//     }
//   });
// });


router.post("/events", async(req,res) => {
 await Event.find({ type: req.body.type, city: req.body.city}, function (err, docs) {
    if(err){
      console.log(err);
    }else{
      console.log(docs);
      res.json(docs);
    }
  });
});

module.exports = router;
