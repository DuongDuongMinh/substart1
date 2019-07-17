var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

exports.createTable = function(dataName, collName, callback){
    MongoClient.connect(url, {useNewUrlParser : true}, function(err, db){
        if(err){
           return callback(err);
        }
        this.dbo = db.db(dataName);   
        dbo.createCollection(collName, function(err, res){
            if(err){
               return callback(err);
            }
            callback(null, 'create table named: ' + collName);
        });
    });
}


exports.getConnection = function(dataName, collName, callback){
    
    MongoClient.connect(url, {useNewUrlParser : true}, function(err, db){
        if(err) {
            return callback(err);
        }
        var dbo = db.db(dataName);
        var collection = dbo.collection(collName);
        callback(null, collection);
       
    });
}





