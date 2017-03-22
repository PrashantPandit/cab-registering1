var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST

    //Any requests to this controller must pass through this 'use' function
    //Copy and pasted from method-override
    //router.use(bodyParser.urlencoded({ extended: true }))


    var mongoose = require('mongoose');

    var offerSchema = mongoose.Schema({

    offrSource: String,
    offrDestination : String,
    offrDiscount: String
});

var Offer = mongoose.model('Offer', offerSchema, 'offer');

//Offer
router.get('/getOffr', function(req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Offer.find({}, function(err, docs) {
        res.json(docs);

    });
});

router.get('/getOffr/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    Offer.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addOffr', function(req, res) {
    console.log(req.body);


    var sorc = req.body.offrSource;
    var dest = req.body.offrDestination;
    var disc = req.body.offrDiscount;


    var offer = new Offer({

        offrSource: sorc,
        offrDestination : dest,
        offrDiscount: disc

    });

    offer.save(function(err, docs) {
        if (err) throw err;
        console.log("Book Saved Successfully");
        res.json(docs);
    });

})

router.delete('/deleteOffr/:id', function(req, res) {
    console.log("REACHED Delete FUNCTION ON SERVER");
    Offer.remove({ _id: req.params.id }, function(err, docs) {
        res.json(docs);
    });
})

router.put('/updateOffr/:id', function(req, res) {
    console.log("REACHED PUT");
    console.log(req.body);
    Offer.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, data) {
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
