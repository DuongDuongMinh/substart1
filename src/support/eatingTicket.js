var server = require('./server');
var store = require('../constant/store');
var dataName = store.DATA_NAME;
var ticket = store.EATING_TICKET;

function EatingTicket(){};

EatingTicket.prototype.connect = function(app){
    app.post('/addTicket', (req, res) => {
        server.add(dataName, ticket, req, res);
    });

    app.post('/addManyTicket', (req, res) => {
        server.add(dataName, ticket, req, res);
    });

    app.get('/tickets', (req, res) => {
        server.items(dataName, ticket, req, res);
    });

    app.get('/tickets/:id', (req, res) => {
        server.item(dataName, ticket, req, res);
    });

    app.put('/tickets/:id', (req, res) => {
        server.update(dataName, ticket, req, res);
    });

    app.delete('/tickets/:id', (req, res) => {
        server.deleteItem(dataName, ticket, req, res);
    });

    app.get('/tickes/findByStatus', (req, res) => {
        server.findByStatus(dataName, ticket, req, res);
    });
}

exports.EatingTicket = EatingTicket;