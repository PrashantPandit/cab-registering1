var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST


    //Any requests to this controller must pass through this 'use' function
    //Copy and pasted from method-override
    //router.use(bodyParser.urlencoded({ extended: true }))


    var mongoose = require('mongoose');

    var contSchema = mongoose.Schema({
      contName: String,
      contEmail : String,
      contComment: String
    });

    var Contact = mongoose.model('Contact', contSchema, 'contact');

//Movie
router.get('/getCont', function(req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Contact.find({}, function(err, docs) {
        res.json(docs);

    });
});

router.get('/getCont/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    Contact.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addCont', function(req, res) {
    console.log(req.body);


    var cname = req.body.contName;
    var cemail = req.body.contEmail;
    var comment = req.body.contComment;

    var contact = new Contact({
        contName: cname,
        contEmail: cemail,
        contComment: comment
    });

    contact.save(function(err, docs) {
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
