var express = require('express');
var router = express.Router();
const bookService = require("../../services/bookService");

/* GET BOOKs */
router.get('/', function(req, res, next) {
    res.json(bookService.getBooks());
});

module.exports = router;