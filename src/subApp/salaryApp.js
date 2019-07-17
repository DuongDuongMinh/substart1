var express = require('express');
var bodyParser = require('body-parser');
var store = require('../constant/store');
var app = express();
var ObjectId = require('mongodb').ObjectId;
var EmployeeDep = require('../deployer/empDeployer').EmployeeDep;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var emp = new EmployeeDep();

/*
@param userId.
@param starting date,
@param finishing date,
@param pay;
@param bonus
@param support
@param insurance.
*/
app.post('/addSalary', function(req, res){
    var salary = {};
    salary.userId = req.query.userId;
    salary.pay = req.query.pay;
    salary.startDay = req.query.startDay;
    salary.finishDay = req.query.finishDay;
    salary.bonus = req.query.bonus;
    salary.support = req.query.support;
    salary.insurance = req.query.insurance;
    
    emp.add(store.DATA_NAME, store.SALARY, salary, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });

});

app.get("/salaryList", function(req, res){
    emp.findAll(store.DATA_NAME, store.SALARY, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

app.get("/salaryById", function(req, res){
    var id = ObjectId(req.query.id);
    emp.findById(store.DATA_NAME, store.SALARY, id, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    })
})
/*
@param id
@param you want to update;
*/
app.put('/updateSalaryById', function(req, res){
    var obj = {};
    var pay = req.query.pay;
    var bonus = req.query.bonus;
    var support = req.query.support;
    var startDay = req.query.starDay;
    var finishDay = req.query.finishDay;
    var userId = req.query.userId; 
    var insurance = req.query.insurance;

    if(pay) obj.pay = pay;
    if(bonus) obj.bonus = bonus;
    if(support) obj.support = support;
    if(startDay) obj.startDay = startDay;
    if(finishDay) obj.finishDay = finishDay;
    if(userId) obj.userId = userId;
    if(insurance) obj.insurance = insurance;

    var id = ObjectId(req.query.id);
    emp.updateById(store.DATA_NAME, store.SALARY, id, obj, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

app.delete("/deleteSalaryById", function(req, res){
    var id = ObjectId(req.query.id);
    emp.removeById(store.DATA_NAME, store.SALARY, id, function(err, result){
         if(err) return res.send(err);
         res.send(result);
    });
});

var server = app.listen(8080, function(req, res){
    var host = server.address().address;
    var port = server.address().port;
    console.log("web server: " + host + port);
});