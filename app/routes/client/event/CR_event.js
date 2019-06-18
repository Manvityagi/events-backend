const express = require('express'), 
      Event   = require('../../../models/event'),
      router  = express.Router();

//CAN REMOVE /CLENT FROM BEGINNING FROM EACH OF THE ROUTES BCZ YE API TO SABKE LIYE SAME HOGI


router.get("/client/events", (req,res) => {
    Event.find({},function(err,allevents){
        if(err){
            console.log(err);
        }else{
            //res.render("client/event/index", {events: allevents});
            res.json(allevents);
        }
    });
});


// router.get("/client/events/new", (req,res) => {
//     res.render("client/event/new"); 
//  }); 

router.post("/client/events", (req,res) => { 
    Event.create(req.body, (err,newEvent)=> {
        if(err){
            console.log(`error from new eventadding: ${err}`);
        }else{
           // console.log(newevent);
           // res.redirect("/client/events");
           res.json(newEvent);
        }   
    });   
});

// router.get("/client/events/:id", (req,res) => {
//     Event.findById(req.params.id, (err,foundevent)=> {
//         if(err){
//             console.log(err);
//         }else{
//             //console.log(foundevent)
//             res.render("client/event/show",{event: foundevent});
//         }
//     });
// });

//edit eventroute
// router.get("/client/event/:id/edit", (req,res)=> {
//     Event.findById(req.params.id, (err,foundevent)=>{
//        if(err){
//            res.redirect("/client/events/" + req.params.id);
//            console.log(err);
//        }else{
//            console.log(foundevent);
//            res.render("client/event/edit", {event: foundevent});
//        }
//     });
// });

router.put("/admin/event/:id", (req,res)=> {
    Event.findByIdAndUpdate(req.params.id,req.body, (err,foundevent)=>{
        if(err){
            console.log(err);
        }else{
            //res.redirect("/client/events/" + req.params.id);
            res.json("updated");
        }
    });
});

// DELETE eventROUTE
router.delete("/admin/event/:id",function(req,res){
    Event.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(`deleting error : ${err}`)
           // res.redirect("/client/events");
        }else{
            //res.redirect("/client/events");
            res.json("deleted");
        }
    });
});

module.exports = router;