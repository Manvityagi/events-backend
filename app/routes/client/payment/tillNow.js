const express = require('express'), 
      Payment   = require('../../../models/payment'),
      router  = express.Router();


      router.get("/:clientId/total", (req,res)=> {
        Payment.find({
            client: req.params.client_id,   
        }, (err,docs) => {
            if(err){
                res.send(err);
            }else{
                console.log("till now is a js function which has to be made");
               res.json(docs.tillNow);
            }
        });
    });



module.exports = router;