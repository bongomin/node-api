var express = require("express");
var bodyparser = require("body-parser");
var mysql = require("mysql");
var path = require('path');


// initializing the app
var app = express();

// configuring express server to access json data
app.use(bodyparser.json());

// creating mysql connection

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employeedb'
});

// creating connection to the database

mysqlConnection.connect((err)=>{

    if(err){
        console.log('Database connection Succesdded');
    }

    else{
        console.log('Database connection failed \n Error :' + JSON.stringify(err,  undefined,2));
    }
});


var PORT = process.env.PORT || 8002;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});

app.get('/employees',(res,req)=>{
    mysqlConnection.query('SELECT * FROM employee',(err,rows,fields) =>{
        if(!err)
        console.log(raws);
        else
        console.log(err);
    });
});

