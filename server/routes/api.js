const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'csc131-project'
});
/* GET api listing. */
router.get('/employee/details/:id?', (req, res) => {
    var id = req.params.id;
    if (id == null) {
        // var query = connection.query('select * from employee', function(err, result) {
        //     res.json(result);
        // });
        res.status(400).send('Please enter a valid employee ID.');

    } else {

        var query = connection.query('select id, fname, lname from employee where id = ?', id, function(err, result) {
            if (result == '') {
                res.status(404).send('Please enter a valid employee ID.');
            } else {
                res.json(result[0]);
            }
            console.log(result.length + ':' + query.sql);
        });
    }


});

router.get('/employee/list', (req, res) => { //employee/list redirects to invalid id
    var query = connection.query('select id, fname, lname from employee', function(err, result) {
        res.json(result);
    });

});

router.get('/employee/managed/:id?', (req, res) => {
    var superV = req.params.id;

    var query = connection.query('select * from employee where superV = ?', superV, function(err, result) {
        res.json(result);
        console.log(query.sql);
    });

});

router.post('/employee', (req, res) => {

    var employee = createEmployee(req.body);

    var query = connection.query('insert into employee set ?', employee, function(err, result) {
        console.log(query.sql);
        //console.error(err);
        console.log(result);
        if (result.affectedRows >= 1) {
            employee.id = result.insertId;
            res.status(201).json(employee);
        } else {
            res.status(500).send("There was a sever error.");
        }
    });

});

router.put('/employee', (req, res) => {
    connection.connect()
    var employee = createEmployee(req.body);
    employee.id = req.body.id;
    var query = connection.query('update employee set ? WHERE id = ?', [employee, employee.id],
        function(err, result) {
            console.log(query.sql);
            console.log(result);
            if (result.affectedRows < 1) {
                res.status(400).send('There were no changes to be added.');
            } else {
                res.json(employee); //maybe doa  query to show only updated content
            }
        });

});

var createEmployee = function(requestbody) {
    var employee = {};
    if (requestbody.fname != null) employee.fname = requestbody.fname;
    if (requestbody.lname != null) employee.lname = requestbody.lname;
    if (requestbody.middle != null) employee.middle = requestbody.middle;
    if (requestbody.email_personal != null) employee.email_personal = requestbody.email_personal;
    if (requestbody.direct_number != null) employee.direct_number = requestbody.direct_number;
    if (requestbody.cell_number != null) employee.cell_number = requestbody.cell_number;
    if (requestbody.date_create != null) employee.date_create = requestbody.date_create;
    if (requestbody.division != null) employee.division = requestbody.division;
    if (requestbody.date_expire != null) employee.date_expire = requestbody.date_expire;
    if (requestbody.fax != null) employee.fax = requestbody.fax;
    if (requestbody.emp_ID != null) employee.emp_ID = requestbody.emp_ID;
    if (requestbody.email_group != null) employee.email_group = requestbody.email_group;
    if (requestbody.home_number != null) employee.home_number = requestbody.home_number;
    if (requestbody.title != null) employee.title = requestbody.title;
    if (requestbody.man != null) employee.man = requestbody.man;
    if (requestbody.not_ID != null) employee.not_ID = requestbody.not_ID;
    if (requestbody.office != null) employee.office = requestbody.office;
    if (requestbody.security != null) employee.security = requestbody.security;
    if (requestbody.status != null) employee.status = requestbody.status;
    if (requestbody.superV != null) employee.superV = requestbody.superV;
    if (requestbody.username != null) employee.username = requestbody.username;
    return employee;
};

module.exports = router;