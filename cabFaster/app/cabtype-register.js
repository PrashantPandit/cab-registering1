var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST


    //Any requests to this controller must pass through this 'use' function
    //Copy and pasted from method-override
    //router.use(bodyParser.urlencoded({ extended: true }))


    var mongoose = require('mongoose');

var cabtSchema = mongoose.Schema({

    cabtType: String

    });

var Cabt = mongoose.model('Cabt', cabtSchema, 'cabt');

//Movie
router.get('/getCabt', function(req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Cabt.find({}, function(err, docs) {
        res.json(docs);

    });
});

router.get('/getCabt/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    Cabt.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addCabt', function(req, res) {
    console.log(req.body);


    var cabtType = req.body.cabtType;


    var cabt = new Cabt({
        cabtType: cabtType

    });

    cabt.save(function(err, docs) {
        if (err) throw err;
        console.log("Book Saved Successfully");
        res.json(docs);
    });

})

router.delete('/deleteCabt/:id', function(req, res) {
    console.log("REACHED Delete FUNCTION ON SERVER");
    Cabt.remove({ _id: req.params.id }, function(err, docs) {
        res.json(docs);
    });
})

router.put('/updateCabt/:id', function(req, res) {
    console.log("REACHED PUT");
    console.log(req.body);
    Cabt.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, data) {
        console.log(data);
        res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;
