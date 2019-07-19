var ObjectId = require('mongodb').ObjectId;
var EmployeeDep = require('../deployer/empDeployer').EmployeeDep;
var emp = new EmployeeDep();

//different with addItem beacause this method needs exactly identify username
var signup = function(dataName, collName, req, res){
    var user = req.body;
    emp.addUser(dataName, collName, user, function(err, result){
          if(err) res.send(err);
          res.send(result);
    });  
}

var logout = function(dataName, collName, req, res){

}

//add many or add one.. item becauser emm.add() check inserted object.
var add = function(dataName, collName, req, res){
    emp.add(dataName, collName, req.body, function(err, result){
        if(err) return res.send(err);
        res.send(result)
    });
}

var items =  function(dataName, collName, req, res){
    emp.findAll(dataName, collName, function(err, result){
        if(err) return res.send(err);
        res.send(result);  
    });
}

var item = function(dataName, collName, req, res){
    var id = ObjectId(req.params.id);
    emp.findById(dataName, collName, id, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
}

var update = function(dataName, collName, req, res){
    var id = ObjectId(req.params.id);
    emp.updateById(dataName, collName, id, req.body, function(err, result){
       if(err) return res.send(err);
       res.send(result);
    });
}

var deleteItem = function(dataName, collName, req, res){
    var id = ObjectId(req.params.id);
    emp.removeById(dataName, collName, id, function(err, result){
         if(err) return res.send(err);
         res.send(result);
    });
}

//login same hare
var findByStatus = function(dataName, collName, req, res){
    var item = req.body;
    if(item.id){
       item.id = ObjectId(item.id);
    }

    emp.findByStatus(dataName, collName, item, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
}

module.exports = {
   signup : signup,
   logout : logout,
   add : add,
   items : items,
   item : item,
   update : update,
   deleteItem : deleteItem,
   findByStatus : findByStatus
}
