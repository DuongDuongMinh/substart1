const server = require('./server');
const store = require('../constant/store');
const dataName = store.DATA_NAME;
const task = store.TASK;

function Task(){}

Task.prototype.connect = function(app){
   
    app.post('/addTask', (req, res) => {
        server.add(dataName, task, req, res);
    });

    app.post('/addManyTask', (req, res) => {
        server.add(dataName, task, req, res);
    })

    app.get('/tasks', (req, res) => {
        server.items(dataName, task, req, res);
    });

    app.get('/tasks/:id', (req, res) => {
        server.item(dataName, task, req, res);
    });

    app.put('/tasks/:id', (req, res) =>{
        server.update(dataName, task, req, res);
    });

    app.delete('/tasks/:id', (req, res) =>{
        server.deleteItem(dataName, task, req, res);
    });

    app.get('/tasks/findByStatus', (req, res) => {
        server.findByStatus(dataName, task, req, res);
    });
}

exports.Task = Task;