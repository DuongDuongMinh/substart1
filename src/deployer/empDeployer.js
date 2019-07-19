
var bodyParser = require('body-parser');
var store = require('../constant/store');
var tb = require('../createTable/table');
var ObjectId = require('mongodb').ObjectId;
/*
    dataName: name of data.
    collName: name of collection.
    account: contain{username, passwor, and some information of useer.}
*/
function EmployeeDep(){}

//because username input same value.
EmployeeDep.prototype.addUser = function(dataName, collName, account, callback){  
    var query = {"username": account.username};

    tb.getConnection(dataName, collName, function(err, table){
        
        table.findOne(query, function(err, result){
            if(!result){
               
                table.insertOne(account, function(err, res){
                     if(err) return callback(err);
                     console.log('create account success! ');
                     return callback(null, "create user account success!");                    
                });                
            }else{  
                console.log('name is registed');
                return callback(new Error('name is registed'));
            }   
        });
    });  
}
 var emp = new EmployeeDep();
//   emp.addUser(store.DATA_NAME, store.ACCOUNT, {"username" : '13f45'}, function(err, res){});

EmployeeDep.prototype.add = function(dataName, collName, obj, callback){
    tb.getConnection(dataName, collName, function(err, table){
        if(err) return callback(err);
        
        console.log('hello');
        if(Array.isArray(obj)){
            table.insertMany(obj, (err, res) =>{
               if(err) return callback(err);
               callback(null, 'create many items success')
            });
        }else{
            table.insertOne(obj, function(err, res){
                if(err) return callback(err);
                
                console.log('insert One');
                callback(null, "create one item success!");
            });
        }
        
    });
}
// emp.add(store.DATA_NAME, store.ACCOUNT, {username: '134test'}, function(err, res){});


EmployeeDep.prototype.removeById = function(dataName, collName, id, callback){
     
    tb.getConnection(dataName, collName, function(err, table){
        if(err) return callback(err);
       
        //TODO id need parser in app.js/
       // var query = {"_id" : ObjectId(id)};
       var query = {"_id" : id};

        table.deleteOne(query, function(err, res){
            if(err) return callback(err);
            
            if(res.deletedCount > 0){
                console.log("a removeed item" + res);
                callback(null, res);
            }else{
                console.log('not removed Item.');
                callback(new Error('not removed Item.'));
            }
            
        });
    });
}
// emp.removeById(store.DATA_NAME, store.ACCOUNT, ObjectId('5d2b68f95dc79f330caad310'), function(err, res){
// });

EmployeeDep.prototype.updateById = function(dataName, collName, id, obj, callback){
    tb.getConnection(dataName, collName, function(err, table){

        if(err) return callback(err);
        //var query = {"_id" : ObjectId(id)};
        var query = {"_id" : id};
        console.log(query);

        table.updateOne(query ,{ $set : obj},  function(err, res){
            if(err) return callback(err);

            if(res.modifiedCount > 0){
                console.log('1 updated Item' + res);
                callback(null, res);
            }else{
               console.log('not updated item');
               callback(new Error('not upadted item'));
            }
                
        });
       
    });
}
//  var obj = {"username": 'miniminh'};
//  emp.updateById(store.DATA_NAME, store.ACCOUNT, ObjectId('aa2b68f95dc79f330c78d310'), obj, function(err, res){} );


EmployeeDep.prototype.findById = function(dataName, collName, id, callback){
    tb.getConnection(dataName, collName, function(err, table){
        if(err) return callback(err);
        var query = {"_id" : id};
        table.findOne(query, function(err, res){
            if(err) return callback(err);
            
            if(res){
                console.log("username : " + res.username);
                callback(err, res);
            }else{
                console.log('not found');
                return callback(new Error('id is invalidate'));
            }
        });
    });
}
// emp.findById(store.DATA_NAME, store.ACCOUNT, ObjectId("5d2b6967c7ee712e30524f57"),
//   function (err, res){});

EmployeeDep.prototype.findAll = function(dataName, collName, callback){

    tb.getConnection(dataName, collName, function(err, table){
        if(err) return callback(err);

        table.find().toArray(function(err, itemList){
            if(err) return callback(err);

            if(itemList){
                console.log('itemList: ');
                console.log(itemList);
               callback(null, itemList);
            }else{
               return callback('no item not found');
           }
        });
    });
}
//because identify username, when i create a account, to use username get information.
// emp.findAll(store.DATA_NAME, store.ACCOUNT, function(err, res){});


EmployeeDep.prototype.findByStatus = function(dataName, collName, item, callback){
    tb.getConnection(dataName, collName, function(err, table){
        if(err) return callback(err);

        table.findOne(item, function(err, res){
            if(err) return callback(err);

            if(res){
                console.log('find one item');
                console.log(res);
                callback(null, res);
            }else{
                console.log('not found');
                callback(new Error('Not item is valid!'));
            }
        });

    });
}
// emp.findByUserName(store.DATA_NAME, store.ACCOUNT, "tuanh1", function(err, res){});

exports.EmployeeDep = EmployeeDep;