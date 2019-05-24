var mysql = require('mysql');



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