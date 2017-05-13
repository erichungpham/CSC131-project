const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.json({creator:'alex',message:'Jimmy and Eric are cool'});
});

router.get('/employee/:id?', (req, res) => {
	var id = req.params.id;
	if (id == null)
	{res.send("here is a list of employees");}
else{
  res.send('id:' + id + ' Jimmy and Eric are super cool');
}
});

router.post('/employee', (req, res) => {
	var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'csc131-project'
});

connection.connect();

var test = {
	fname:req.body.fname,
	lname:req.body.lname,
	username:req.body.username
};

var query = connection.query('insert into employee set ?', test, function(err, result){
	//console.log(query.sql);
	console.error(err);
	//console.log(result);
	if(result.affectedRows >= 1){
		test.id = result.insertId;
		res.json(test);
	}else{
		res.send("could not post")
	}
});
});	


module.exports = router;