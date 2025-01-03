var express = require('express');
var router = express.Router();
let bookHelper = require('../helpers/bookhelper');

/* GET BOOKs */
router.get('/', function(req, res, next) {
    res.json(bookHelper());
});

router.get('/authors/:author', function(req, res, next) {
    res.json(req.params.author);
});

module.exports = router;