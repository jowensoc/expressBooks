var express = require('express');
var router = express.Router();
const bookService = require("../../services/bookService");

router.get('/authors', function(req, res, next) {
    console.log(bookService.getAuthors());
    res.json(bookService.getAuthors());
});

router.get('/authors/:author', function(req, res, next) {
    console.log(req.params.author);
    res.json(bookService.searchBooks("", "", req.params.author));
});

module.exports = router;