const express = require('express'), 
      Event   = require('../../../models/event'),
      router  = express.Router();


router.get("/:client_id/:state", (req,res)=> {
    Event.find({
        client: req.params.client_id,
        state: req.params.state
    }, (err,docs) => {
        if(err){
            res.send(err);
        }else{
            console.log(docs);
           res.json(docs);
        }
    });
});

// router.get("/:id/upcomingEvents", (req,res)=> {

// });

// router.get("/:id/pastEvents", (req,res)=> {

// });

// router.get("/:id/cancelledEvents", (req,res)=> {

// });

// router.get("/:id/draftEvents", (req,res)=> {

// });

module.exports = router;