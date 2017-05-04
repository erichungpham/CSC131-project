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

module.exports = router;