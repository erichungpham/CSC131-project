var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'csc131-project'
});

connection.connect();

var employee = {
fname:'',
lname:'',
middle:'',
email_personal:'',
direct_number:'',
cell_number:'',
date_create:'',
division:'',
date_expire:'',
fax:'',
emp_ID:'',
email_group:'',
home_number:'',
title:'',
man:'',
not_ID:'',
office:'',
security:'',
status:'',
superV:'',
username:''
};

var query = connection.query('insert into employee set ?', employee, function(err, result){
	console.log(query.sql);
});

module.exports = query;