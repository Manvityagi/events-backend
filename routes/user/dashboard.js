const express = require('express'),
      router  = express.Router(),
      Booking = require('../../models/booking'),
      Venue   = require('../../models/venue');


//applying filters for location, date & event-type      
router.get('/:city/:date/:type', (req,res)=> {
    Venue.find({
        city: req.params.city,
        type: req.params.type
    }, (err, docs)=> {
        console.log(typeof(docs));
        console.log(`hi ${docs}`);
    })
})

module.exports = router;
