const server = require('./server');
const store = require('../constant/store');
const dataName = store.DATA_NAME;
const product = store.PRODUCT;

function Product(){};

Product.prototype.connect = function(app){
    app.post('/addProduct', (req, res) => {
        server.add(dataName, product, req, res);
    });

    app.post('/addManyProducts', (req, res) => {
        server.add(dataName, product, req, res);
    });

    app.get('/products', (req, res) => {
        server.items(dataName, product, req, res);
    });

    app.get('/products/:id', (req, res) => {
        server.item(dataName, product, req, res);
    });

    app.put('/products/:id', (req, res) => {
        server.update(dataName, product, req, res);
    });

    app.delete('products/:id', (req, res) => {
        server.deleteItem(dataName, product, req, res);
    });

    app.get('/products/findByStatus', (req, res) =>{
        server.findByStatus(dataName, product, req, res);
    });
}

exports.Product = Product;