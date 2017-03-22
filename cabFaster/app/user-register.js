var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST


    //Any requests to this controller must pass through this 'use' function
    //Copy and pasted from method-override
    //router.use(bodyParser.urlencoded({ extended: true }))


    var mongoose = require('mongoose');

    var uregSchema = mongoose.Schema({

    uregName: String,
    uregContact : String,
    uregCName: String,
    uregCity: String,
    uregEmail: String,
    uregPassword: String
    });

var User = mongoose.model('User', uregSchema, 'user');

//Movie
router.get('/getUreg', function(req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    User.find({}, function(err, docs) {
        res.json(docs);

    });
});

router.get('/getUreg/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    User.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addUreg', function(req, res) {
    console.log(req.body);


    var name = req.body.uregName;
    var contact = req.body.uregContact;
    var company = req.body.uregCName;
    var city = req.body.uregCity;
    var email = req.body.uregEmail;
    var password = req.body.uregPassword;

    var user = new User({
        uregName      : name,
        uregContact   : contact,
        uregCName     : company,
        uregCity      : city,
        uregEmail     : email,
        uregPassword  : password
    });

    user.save(function(err, docs) {
        if (err) throw err;
        console.log("Book Saved Successfully");
        res.json(docs);
    });

})

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
