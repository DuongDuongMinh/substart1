var tb = require('./createTable/table');
var store = require('./constant/store');

var getTable = function(err, result){
    if(err){
        return console.error(err);
    }
    console.log(result);
}

tb.createTable(store.DATA_NAME, store.PRODUCT, getTable);
tb.createTable(store.DATA_NAME, store.SALARY, getTable);
tb.createTable(store.DATA_NAME, store.RESTRICTION, getTable);
tb.createTable(store.DATA_NAME, store.DOMITORY, getTable);
tb.createTable(store.DATA_NAME, store.STACK, getTable);
tb.createTable(store.DATA_NAME, store.EATING_TICKET, getTable);
tb.createTable(store.DATA_NAME, store.ACCOUNT, getTable);
tb.createTable(store.DATA_NAME, store.WORKING_TIME, getTable);