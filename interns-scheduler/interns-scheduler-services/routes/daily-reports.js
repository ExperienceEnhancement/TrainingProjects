var express = require('express');
var router = express.Router();

router.get('/:internId/:date', function (req, res, next) {
    var internId = req.params.internId;
    var date = req.params.date;
    var ObjectId = req.ObjectId;
    var db = req.db;
    var collection = db.get('daily-tasks');
    collection.find({intern: ObjectId(internId), date: date}, {}, function (e, docs) {
        res.json(docs);
    });
});

router.post('/', function (req, res, next) {
    var db = req.db;
    console.log(req.body);
    var collection = db.get('daily-tasks');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;