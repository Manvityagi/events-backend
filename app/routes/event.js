const express = require('express'), 
      event=  require('../../models/event'),
      router = express.Router();

router.get("/client/events", (req,res) => {
    event.find({},function(err,allevents){
        if(err){
            console.log(err);
        }else{
            res.render("client/event/index", {events: allevents});
        }
    });
});


router.get("/client/events/new", (req,res) => {
    res.render("client/event/new"); 
 }); 

router.post("/client/events", (req,res) => {
    
    event.create(req.body.event, (err,newevent)=> {
        if(err){
            console.log(`error from new eventadding: ${err}`);
        }else{
           // console.log(newevent);
            res.redirect("/client/events");
        }   
    });   
});

router.get("/client/events/:id", (req,res) => {
    event.findById(req.params.id, (err,foundevent)=> {
        if(err){
            console.log(err);
        }else{
            //console.log(foundevent)
            res.render("client/event/show",{event: foundevent});
        }
    });
});

//edit eventroute
router.get("/client/event/:id/edit", (req,res)=> {
    event.findById(req.params.id, (err,foundevent)=>{
       if(err){
           res.redirect("/client/events/" + req.params.id);
           console.log(err);
       }else{
           console.log(foundevent);
           res.render("client/event/edit", {event: foundevent});
       }
    });
});

router.put("/client/event/:id", (req,res)=> {
    event.findByIdAndUpdate(req.params.id,req.body.event, (err,foundevent)=>{
        if(err){
            res.redirect("/client/events/" + req.params.id);
            console.log(err);
        }else{
            res.redirect("/client/events/" + req.params.id);
        }
    });
});

// DELETE eventROUTE
router.delete("/client/events/:id",function(req,res){
    event.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(`deleting error : ${err}`)
            res.redirect("/client/events");
        }else{
            res.redirect("/client/events");
        }
    });
});

module.exports = router;