const store = require('../constant/store');
var dataName = store.DATA_NAME;
var account = store.ACCOUNT;
var server = require('./server');

function Account(){};

Account.prototype.connect = function(app){
   app.post('/signup', (req, res) => {
      server.add(dataName, account, req, res);
   });

   app.get('/login', (req, res) => {
      server.findByStatus(dataName, account, req, res);   
   });
   //TODO have not done
   app.get('/logout', (req, res) =>{
   });

   app.get('/users', (req, res) => {
      server.items(dataName, account, req, res);
   });

   app.get('/users/:id', (req, res) => {
         server.item(dataName, account, req, res);
   });

   app.put('/users/:id', (req, res) => {
         server.update(dateName, account, req, res);
   });

   app.delete('/users/:id', (req, res) => {
         server.deleteItem(dataName, account, req, res);
   });

   app.get('/users/findByStatue', (req, res) => {
         server.findByStatus(dataName, account, req, res);
   }); 
}

exports.Account = Account;

