var mysql = require('mysql');
var bodyparser=require('body-parser');
var express = require(express);


// initialising the application
var app = express();

// configuring express server to access json data
app.use(bodyparser.json());

// creating mysql connection

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'',
    password:'',
    database:'employeedb'
});

// creating connection to the database

mysqlConnection.connect((err)=>{
    if(err)
    console.log('Database connection Succesdded');

    else{
        console.log('Database connection failed \n Error :' + JSON.stringify(err,  undefined,2));
    }
});

app.listen(3000,()=>{
    console.log('express server is running at port :3000')
});

app.get('/employess',(res,req)=>{
    mysqlConnection.query('S')
});

