const express = require('express');
const router = express.Router();
const authmodel = require('../model/authmodel')
const jwt = require('jsonwebtoken');

router.get('/',(request,response)=>{
    response.status(200).send("Hello world");
});


router.post('/register',(request,response)=>{
    let user = request.body;
    console.log(user);
    authmodel.fetchRegistration(user.username,(result)=>{
        if(result){
            response.status(401).send({status : 'User already exists'});
        } else {
            authmodel.registration(user,(result)=>{
                let payload = {
                    subject : result._id
                };
                let secretcode = "savitasoft";
                let token = jwt.sign(payload,secretcode);

                response.status(200).send({status : 'Registration successful',token : token});

            });
        }
    });
})

router.post('/login',(request,response)=>{
    let user = request.body;
    authmodel.fetchRegistration(user.username,(result)=>{
        if(!result){
            response.status(401).send({auth : false, status : 'Invalid username'});
        } else if(user.password != result.password) {
            response.status(401).send({auth : false, status : 'Invalid password'})
        }else {
            let payload = {
                subject : result._id
            };
            let secretcode = "savitasoft";
            let token = jwt.sign(payload,secretcode);

            response.status(200).send({auth : true, status : 'Login successfull',token : token});
        }
    });
})

router.get('/projects',(request,response)=>{
    authmodel.fetchProjects((result)=>{
        response.status(200).send(result);
    })
})


module.exports = router;