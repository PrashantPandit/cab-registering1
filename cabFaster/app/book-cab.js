var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST


    //Any requests to this controller must pass through this 'use' function
    //Copy and pasted from method-override
    //router.use(bodyParser.urlencoded({ extended: true }))


    var mongoose = require('mongoose');

    var loctSchema = mongoose.Schema({

    loctPickup: String,
    loctDrop : String,
    loctDate: String,
    loctTime: String,
    loctEmail: String,
    loctContact: String,
    loctCType : String

    });

var Book = mongoose.model('Book', loctSchema, 'book');

//Movie
router.get('/getLoct', function(req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Book.find({}, function(err, docs) {
        res.json(docs);

    });
});

router.get('/getLoct/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    Book.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addLoct', function(req, res) {
    console.log(req.body);


    var plocation = req.body.loctPickup;
    var dlocation = req.body.loctDrop;
    var date = req.body.loctDate;
    var time = req.body.loctTime;
    var email = req.body.loctEmail;
    var contact = req.body.loctContact;
    var ctype = req.body.loctCType;

    var book = new Book({

        loctPickup      : plocation,
        loctDrop   : dlocation,
        loctDate     : date,
        loctTime      : time,
        loctEmail     : email,
        loctContact  : contact,
        loctCType  : ctype
    });

    book.save(function(err, docs) {
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
