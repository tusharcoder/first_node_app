var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/helloworld/', function (req, res, next) {
    res.render('helloworld', {title: 'Hello World!'})
});
//here we fetch the data from the mongo nodetest1 database and show the users list stored in the database
router.get('/userslist/', function (req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({}, {}, function (e, docs) {
        res.render('userlist', {
            'userlist': docs
        });
    });
});
module.exports = router;
