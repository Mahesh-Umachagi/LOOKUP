const express = require('express');
const router = express.Router();
const lookupmodel = require('../model/lookupmodel')


router.get('/',(request,response)=>{
    lookupmodel.fetchLookups((result)=>{
        response.status(200).send(result);
    })
})

router.get('/:id',(request,response)=>{
    let id = parseInt(request.params.id);
    lookupmodel.fetchLookupDetails(id,(result)=>{
        response.status(200).send(result);
    })
})

router.put('/:id',(request,response)=>{
    console.log("Server check up 1");
    let id = parseInt(request.params.id);
    let review = request.body;
    console.log(id);
    console.log(review);
    lookupmodel.putLookupReview(id,review,(result)=>{
        response.status(200).send(result);
    });
})


module.exports = router;