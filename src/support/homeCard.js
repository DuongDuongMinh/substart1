var server = require('./server');
var store = require('../constant/store');
var dataName = store.DATA_NAME;
var card = store.HOME_CARD;

function HomeCard(){}

HomeCard.prototype.connect = function(app){
    
    app.post('/addHomeCard', (req, res) => {
        server.add(dataName, card, req, res);
    });

    app.post('/addManyCards', (req, res) => {
        server.add(dataName, card, req, res);
    });

    app.get('/homeCards', (req, res) => {
        server.items(dataName, card, req, res);
    });

    app.get('/homeCards/:id', (req, res) =>{
        server.item(dataName, card, req, res);
    });

    app.put('/homeCards/:id', (req, res) =>{
        server.update(dataName, card, req, res);
    });

    app.delete('/homeCards/:id', (req, res) => {
        server.deleteItem(dataName, card, req, res);
    });

    app.get('/homeCards/findByStatus', (req, res) => {
        server.findByStatus(dataName, card, req, res);
    });
}

exports.HomeCard = HomeCard;