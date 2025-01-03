const assert = require("assert");
const bookInternalService = require("../../src/services/bookInternalService")

describe("book internal service", function() {
   it("get books", function () {
      let books = bookInternalService.getBooks();
      assert(books.length > 0);
   });

   it("get authors", function () {
      let authors = bookInternalService.getAuthors();
      assert(authors.length > 0);
   });
});