var express = require('express');
var router = express.Router();
let bookHelper = require('../helpers/bookhelper');


/* GET home page. */
router.get('/', function(req, res, next) {
  let books = bookHelper();
  res.render('index', { title: 'Books Catalogue', books: books });
});

module.exports = router;
