const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const option = {explorer : true};
const serve = swaggerUi.serve;
const router = express.Router();

const Account = require('./support/account').Account;
const Product = require('./support/product').Product;
const HomeCard = require('./support/homeCard').HomeCard;
const Salary  = require('./support/salary').Salary;
const WorkingTime = require('./support/workingTime').WorkingTime;
const Task = require('./support/task').Task;
const EatingTicket = require('./support/eatingTicket').EatingTicket;
const Permission = require('./support/permission').Permission;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var account = new Account();
account.connect(app);

var product = new Product();
product.connect(app);

var homeCard = new HomeCard();
homeCard.connect(app);


var salary = new Salary();
salary.connect(app);


var workingTime = new WorkingTime();
workingTime.connect(app);


var task = new Task();
task.connect(app);


var eatingTicket = new EatingTicket();
eatingTicket.connect(app);


var permission = new Permission();
permission.connect(app);


app.listen(8080, (req, res) =>{
    console.log('web server listens 8080');
});

 
