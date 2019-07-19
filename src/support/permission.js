var server = require('./server');
var store = require('../constant/store');
var dataName = store.DATA_NAME;
var permission = store.RESTRICTION;

function Permission(){};

Permission.prototype.connect = function(app){
    
    app.post('/addPermission', (req, res) => {
        server.add(dataName, permission, req, res );
    });

    app.post('/addManyPermissions', (req, res) => {
        server.add(dataName, permission, req, res);
    });

    app.get('/perimssions', (req, res) => {
        server.items(dataName, permission, req, res);
    });

    app.get('/permissions/:id', (req, res) => {
        server.item(dataName, permission, req, res);
    });

    app.put('/permissions/:id', (req, res) => {
        server.update(dataName, permission, req, res);
    });

    app.delete('/perimissions/:id', (req, res) =>{
        server.deleteItem(dataName, permission, req, res);
    });

    app.get('/permissions/findById', (req, res) => {
        server.findByStatus(dataName, permission, req, res);
    });
}

exports.Permission = Permission;