var express = require('express');
var bodyParser = require('body-parser');
var store = require('../constant/store');
var ObjectId = require('mongodb').ObjectId;
var app = express();
var EmployeeDep = require('../deployer/empdeployer').EmployeeDep;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var emp = new EmployeeDep();

/*
 @param code;
 @param name,
 @param price,
 @param date,
 @param sfuff;
 @param userId;
*/
app.post('/addProduct', function(req, res){
    var product = {};

    var code = req.query.code;
    var name = req.query.name;
    var price = req.query.price;
    var date = req.query.date;
    var stuff = req.query.stuff;
    var userId = req.query.userId;

    if(code) product.code = code;
    if(name) product.name = name;
    if(price) product.price = price;
    if(stuff) product.stuff = stuff;
    if(date) price.date = date;
    if(userId) price.userId = userId;

    emp.add(store.DATA_NAME, store.PRODUCT, product, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

app.get('/productById', function(req, res){
    var id = ObjectId(req.query.id);
    emp.findById(store.DATA_NAME, store.PRODUCT, id, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

app.get("/productList", function(req, res){
    emp.findAll(store.DATA_NAME, store.PRODUCT, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

/*
@param id require.
@param something you want.
*/
app.put('/updateProductById', function(req, res){
    var id = ObjectId(req.query.id);
    var product  = {};

    var code = req.query.code;
    var name = req.query.name;
    var price = req.query.price;
    var userId = req.query.userId;
    var date = req.query.date;
    var stuff = req.query.stuff;

    if(code) product.code = code;
    if(name) product.name = name;
    if(price) product.price = price;
    if(userId) product.userId = userId;
    if(date) product.date = date;
    if(stuff) product.stuff = stuff;

    emp.updateById(store.DATA_NAME, store.PRODUCT, id, product, function(err, result){
        if(err) return res.send(err);
        res.send(result);
    });
});

app.delete("/deleteProductById", function(req, res){
    var id = ObjectId(req.query.id);
    emp.removeById(store.DATA_NAME, store.PRODUCT, id, function(err, result){
         if(err) return res.send(err);
         res.send(result);
    });
});

var server = app.listen(8080, function(req, res){
    var host = server.address().address;
    var port = server.address().port;
    console.log("web server: " + host + port);
});