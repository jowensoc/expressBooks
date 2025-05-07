var express = require('express');
var router = express.Router();
const booksRoute = require("./books");
const authorsRoute = require("./authors");

router.use(booksRoute);
router.use(authorsRoute);

module.exports = router;