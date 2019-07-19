var server = require('./server');
var store = require('../constant/store');
var dataName = store.DATA_NAME;
var time = store.WORKING_TIME;

function WorkingTime(){};

WorkingTime.prototype.connect = function(app){
    
    app.post('/addTime', (req, res) => {
        server.add(dataName, time, req, res);
    });

    app.post('/addManyTimes', (req, res) => {
        server.add(dataName, time, req, res);
    });

    app.get('/times', (req, res) => {
        server.items(dataname, time, req, res);
    });

    app.get('/items/:id', (req, res) => {
        server.item(dataName, time, req, res);
    });

    app.put('/items/:id', (req, res) => {
        server.update(dataName, time, req, res);  
    });

    app.delete('/items/:id', (req, res) => {
        server.deleteItem(dataName, time, req, res);
    });

    app.get('/items/findByStatus', (req, res) => {
        server.findByStatus(dataName, time, req, res);
    });
}

exports.WorkingTime = WorkingTime;