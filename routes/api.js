var express = require('express');
var db = require('somewhere');


db.connect('./db.json');

db._save = function(collection, data, cb) {
	db.save(collection,data);
	cb();
};
// ROUTING ------------

var router = express.Router();


router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req,res) {
	res.json({ message: 'hooray! welcome to our api!'});
});

// more routes for our API will happen here

// on routes that end in /families
// --------------------------------------------
router.route('/families')

	// create a family (accessed at POST http://localhost:8080/api/families)
	.post(function(req,res) {

		var family = {}; // create a new family instance;
		family.name = req.body.name;
		//save the family and check for errors
		db._save('families', family, function(err) {
			if (err){
				res.send(err);
			} else {
				res.json({ message: 'Family created!' });
			};
		});

	})

	// get all the families (accessed at GET http://localhost:8080/api/families)
	.get(function(req,res) {
		var r = db.find('families');
		res.json(r);
	});

// on routes that end in /families/:family_id
// --------------------------------------------------
router.route('/families/:family_id')

	//get the family with that ID (accessed at GET http://localhost:8080/families/:family_id)
	.get(function(req,res) {
		var r = db.findOne('families', {name: req.params.family_id});
		res.json(r)
	})

	//update the family with this id
	.put(function(req,res) {
		db.update('families',req.params.family_id, req.body);
		res.json({message: 'Family updated!'})
	})

	//delete the family with this ID
	.delete(function(req,res) {
		db.remove('families', req.params.family_id);
		res.json({message: 'Family deleted!'})
	});

router.route('/families/:family_id/members')
	.get(function(req,res){
		var r = db.find('persons',{surname:req.params.family_id});
		res.json(r);
	})
// on routes that end in /persons
// --------------------------------------------
router.route('/persons')

	// create a person (accessed at POST http://localhost:8080/api/persons)
	.post(function(req,res) {

		var person = {}; // create a new person instance;
		person = req.body;
		//save the person and check for errors
		db._save('persons', person, function(err) {
			if (err){
				res.send(err);
			} else {
				res.json({ message: 'Person created!' });
			};
		});

	})

	// get all the families (accessed at GET http://localhost:8080/api/persons)
	.get(function(req,res) {
		var r = db.find('persons');
		res.json(r);
	});

// on routes that end in /persons/:person_id
// --------------------------------------------------
router.route('/persons/:person_id')

	//get the family with that ID (accessed at GET http://localhost:8080/persons/:person_id)
	.get(function(req,res) {
		var r = db.findOne('persons', {id: req.params.person_id});
		res.json(r)
	})

	//update the family with this id
	.put(function(req,res) {
		db.update('persons',req.params.person_id, req.body);
		res.json({message: 'Person updated!'})
	})

	//delete the person with this ID
	.delete(function(req,res) {
		db.remove('persons', req.params.person_id);
		res.json({message: 'Person deleted!'})
	});


module.exports = router;