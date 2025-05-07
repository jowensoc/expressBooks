const assert = require("assert");
const bookService = require("../../src/services/bookService");

describe("book service", function() {

    describe("get requests", function () {
        it("- books", function () {
            let books = bookService.getBooks();
            assert(books.length > 0);
        });

        it("- authors", function () {
            let authors = bookService.getAuthors();
            assert(authors.length > 0);
        });
    });
});