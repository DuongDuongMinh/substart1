var server = require('./server');
var store = require('../constant/store');
var dataName = store.DATA_NAME;
var salary = store.SALARY;

function Salary(){}

Salary.prototype.connect = function(app){
   
    app.post('/addSalary', (req, res) => {
        server.add(dataName, salary, req, res);
    });

    app.post('/addManySalaries', (req, res) => {
        server.add(dataName, salary, req, res);
    });

    app.get('/salaries', (req, res) => {
        server.items(dataName, salary, req, res);
    });

    app.get('/salaries/:id', (req, res) => {
        server.item(dataName, salary, req, res);
    });

    app.put('/salaries/:id', (req, res) => {
        server.update(dataName, salary, req, res);
    });

    app.delete('/salaries/:id', (req, res) => {
        server.deleteItem(dataName, salary, req, res);
    });

    app.get('/salaries/findByStatus', (req, res) =>{
        server.findByStatus(dataName, salary, req, res);
    });
}

exports.Salary = Salary;