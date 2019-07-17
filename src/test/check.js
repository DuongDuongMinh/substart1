var tb = require('../createTable/table')


tb.createTable('Checking', 'check', function(err, result){
    if(err){
        return console.error(err);
    }
    console.log(result);
});

tb.getConnection('Corporation', "Employee", function(err, collection){
    if(err){
        return console.error(err);
    }
    collection.find({}).toArray(function(err, res){
        console.log(res);
    });
  
});

