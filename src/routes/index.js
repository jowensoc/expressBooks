var express = require('express');
var router = express.Router();
const bookService = require("../services/bookInternalService");

/* GET home page. */
router.get('/', function(req, res, next) {
  let books = bookService.getBooks();
  res.render('index', { title: 'Books Catalogue', books: books });
});

module.exports = router;
