const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.json({creator:'',message:'api'});
});

router.get('/employee/:id?', (req, res) => {
	var id = req.params.id;
	if (id == null)
	{res.send("here is a list of employees");}
else{
  res.send('id:' + id + ' here is employee id/info');
}
});

router.post('/employee', (req, res) => {
	res.json({message:'create employee'});
});

router.post('/login', (req,res) => {
	var username = req.params.user.name;
	var password = req.params.user.password;
	
	var pwhash = user.name + user.password;
	
	//goto database check pwhash
	
	//if good user is valid, so authenticate or something like that
	
	res.json({success:'fail'});
});

module.exports = router;