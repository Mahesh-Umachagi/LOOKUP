const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
var dbo;
var db;

MongoClient.connect(url,(error,result)=>{
    if(error)
        throw error;
    dbo = result;
    db = dbo.db('projectsite');
    console.log("Established connection to mongodb database projectsite");
    // let user = 'praveen@gmail.com'
    // fetchRegistration(user);
})

function registration(user,callback){
    db.collection('registration').insertOne(user,(error,result)=>{
        if(error)
            throw error;
        callback(result);
    })
}

function fetchRegistration(email,callback){
    db.collection('registration').findOne({username : email},(error,result)=>{
        callback(result);
    })
}

module.exports.registration = registration;
module.exports.fetchRegistration = fetchRegistration;
