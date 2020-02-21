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
    
})

function fetchLookups(callback){
    db.collection('lookups').find().toArray((error,result)=>{
        callback(result);
    })
};

function fetchLookupDetails(lookupid,callback){
    db.collection('lookups').findOne({lookupid : lookupid},(error,result)=>{
        callback(result);
    })
};

function putLookupReview(id,review,callback){
    let qry = {lookupid : id};
    let newvalue = {$push : {review : review}};
    db.collection('lookups').update(qry,newvalue,(error,result)=>{
        callback(result);
    });
}

module.exports.fetchLookups = fetchLookups;
module.exports.fetchLookupDetails = fetchLookupDetails
module.exports.putLookupReview = putLookupReview;