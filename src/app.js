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
view('./swagger/product.yaml', '/view-product');



var homeCard = new HomeCard();
homeCard.connect(app);
view('./swagger/card.yaml', '/view-card');

var salary = new Salary();
salary.connect(app);
view('./swagger/salary.yaml', '/view-salary');

var workingTime = new WorkingTime();
workingTime.connect(app);
view('./swagger/time.yaml', '/view-time');

var task = new Task();
task.connect(app);
view('./swagger/task.yaml', '/view-task');

var eatingTicket = new EatingTicket();
eatingTicket.connect(app);
view('./swagger/ticket.yaml', '/view-ticket');

var permission = new Permission();
permission.connect(app);
view('./swagger/permission.yaml', '/view-permission');


function view(swagFileName, viewName) {
   const filePath = yaml.load(swagFileName);
   app.use(viewName , serve, swaggerUi.setup(filePath, option));
   
}

app.listen(8080, (req, res) =>{
    console.log('web server listens 8080');
});

 
