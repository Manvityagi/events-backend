const express = require('express'), 
      Venue =  require('../../../models/venue'),
      router = express.Router();

router.get("/", (req,res) => {
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

router.post("/", (req,res) => {  
    console.log(req.body);
    Venue.create(req.body, (err,newVenue)=> {
        console.log("hii");
        if(err){
            console.log(`error from new venue adding: ${err}`);
        }else{
            console.log("oo baby");
            console.log(newVenue);
            res.json(newVenue);
        }   
    });   
});

 /* To see a particular venue */
// router.get("/client/venues/:id", (req,res) => {
//     Venue.findById(req.params.id, (err,foundVenue)=> {
//         if(err){
//             console.log(err);
//         }else{
//             //console.log(foundvenue)
//             res.render("client/venue/show",{venue: foundVenue});
//         }
//     });
// });


// //show edit venue form
// router.get("/client/venue/:id/edit", (req,res)=> {
//     Venue.findById(req.params.id, (err,foundVenue)=>{
//        if(err){
//            res.redirect("/client/venues/" + req.params.id);
//            console.log(err);
//        }else{
//            console.log(foundVenue);
//            res.render("client/venue/edit", {venue: foundVenue});
//        }
//     });
// });

router.put("/:id", (req,res)=> {
    Venue.findByIdAndUpdate(req.params.id,req.body, (err,foundVenue)=>{
        if(err){
            //res.redirect("/client/venues/" + req.params.id);
            console.log(err);
        }else{
            //res.redirect("/client/venues/" + req.params.id);
            res.json("Updated");
        }
    });
});

// DELETE venueROUTE
router.delete("/:id",function(req,res){
    Venue.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(`deleting error : ${err}`)
            //res.redirect("/client/venues");
        }else{
            res.json("deleted");
        }
    });
});

module.exports = router;