const express = require('express'), 
      Venue =  require('../models/venue'),
      router = express.Router();

router.get("/client/venues", (req,res) => {
    Venue.find({},function(err,allVenues){
        if(err){
            console.log(err);
        }else{
            //res.render("client/venue/index", {venues: allVenues});
            res.json(allVenues);
        }
    });
});

 ////Route to redirect to the form to create new venue ///////

// router.get("/client/venues/new", (req,res) => {
//     res.render("client/venue/new"); 
//  }); 

router.post("/client/venues", (req,res) => {  
    Venue.create(req.body.venue, (err,newVenue)=> {
        if(err){
            console.log(`error from new venue adding: ${err}`);
        }else{
           // console.log(newvenue);
            res.redirect("/client/venues");
        }   
    });   
});

router.get("/client/venues/:id", (req,res) => {
    Venue.findById(req.params.id, (err,foundVenue)=> {
        if(err){
            console.log(err);
        }else{
            //console.log(foundvenue)
            res.render("client/venue/show",{venue: foundVenue});
        }
    });
});

//edit venue route
router.get("/client/venue/:id/edit", (req,res)=> {
    Venue.findById(req.params.id, (err,foundVenue)=>{
       if(err){
           res.redirect("/client/venues/" + req.params.id);
           console.log(err);
       }else{
           console.log(foundVenue);
           res.render("client/venue/edit", {venue: foundVenue});
       }
    });
});

router.put("/client/venue/:id", (req,res)=> {
    venue.findByIdAndUpdate(req.params.id,req.body.venue, (err,foundVenue)=>{
        if(err){
            res.redirect("/client/venues/" + req.params.id);
            console.log(err);
        }else{
            res.redirect("/client/venues/" + req.params.id);
        }
    });
});

// DELETE venueROUTE
router.delete("/client/venues/:id",function(req,res){
    Venue.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(`deleting error : ${err}`)
            res.redirect("/client/venues");
        }else{
            res.redirect("/client/venues");
        }
    });
});

module.exports = router;