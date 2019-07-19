var express = require('express');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;
var app = express();
var store = require('../constant/store');
var EmployeeDep = require('../deployer/empDeployer').EmployeeDep;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//test
var emp = new EmployeeDep();
// emp.findAll(store.DATA_NAME, store.ACCOUNT, function(err, res0){});

app.get('/userList', function(req, res){
    emp.findAll(store.DATA_NAME, store.ACCOUNT, function(err, result){
         if(err) return res.send(err);
         res.send(result);  
    });
});

app.get('/userByUsername', function(req, res){
    var username = req.query.username;

    emp.findByUserName(store.DATA_NAME, store.ACCOUNT, username, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

/*
@param username,
@param password,
@param name
@param birdthday(yyy-mm-dd)
@param country
@param gender
*/
app.post('/signup', function(req, res){
    var user = {};
    user.username = req.query.username;
    user.password = req.query.password;
    user.name = req.query.name;
    user.birthday = req.query.birthday;
    user.country = req.query.country;
    user.gender = req.query.gender;

    emp.addUser(store.DATA_NAME, store.ACCOUNT, user, function(err, result){
          if(err) res.send(err);
          res.send(result);
    });
    
});

/*
 @param id
 @param somthing you want update.
 //todo  will do later.
 node with account have unique => update username need check it. 
*/
app.put('/updateEmpById', function(req, res){

   var id = ObjectId(req.query.id);
   user = {};
   var pass = req.query.password;
   var birth = req.query.birthday;
   var name = req.query.name;
   var gender = req.query.gender;
   var country = req.query.country;

   if(pass) user.password = pass;
   if(birth) user.birthday = birth;
   if(name) user.name = name;
   if(gender) user.gender = gender;
   if(country) user.country = country;

   emp.updateById(store.DATA_NAME, store.ACCOUNT, id, user, function(err, result){
       if(err) return res.send(err);
       res.send(result);
   });
});

app.delete("/deleteEmpById", function(req, res){
    var id = ObjectId(req.query.id);

    emp.removeById(store.DATA_NAME, store.ACCOUNT, id, function(err, result){
         if(err) return res.send(err);
         res.send(result);
    });
});

var server = app.listen(8080, function(req, res){
    var host = server.address().address;
    var port = server.address().port;

    console.log("server: " + host + port);
});

