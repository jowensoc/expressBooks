const assert = require("assert");
const bookInternalService = require("../../src/services/bookInternalService")

describe("book internal service", function() {

   describe("get requests", function() {
      it("- books", function () {
         let books = bookInternalService.getBooks();
         assert(books.length > 0);
      });

      it("- authors", function () {
         let authors = bookInternalService.getAuthors();
         assert(authors.length > 0);
      });
   });

   describe("search feature", function() {
      it("- books by author. Should return results", function () {
         let searchResults = bookInternalService.searchAuthors("Stephen", "King");
         assert(searchResults.length > 0);

         console.table(searchResults);
      });

      it("- books by author. Should not return any results", function () {
         let searchResults = bookInternalService.searchAuthors("", "Test");
         assert(searchResults.length === 0);
      });

      it("- books by title. Should return results", function () {
         let searchResults = bookInternalService.searchBooks("Raft", "", "");
         assert(searchResults.length > 0);
         assert(searchResults[0].title === "Raft");
      });

      it("- books by title. Should not return any results", function () {
         let searchResults = bookInternalService.searchBooks("test", "", "");
         assert(searchResults.length === 0);
      });

      it("- books by title and author. Should return results", function () {
         let searchResults = bookInternalService.searchBooks("Raft", "Stephen", "Baxter");
         assert(searchResults.length > 0);
         assert(searchResults[0].title === "Raft"
                     && searchResults[0].authors[0].fullname === "Stephen Baxter");
      });

      it("- books by author firstname and lastname. Should return results", function () {
         let searchFirstName = "Alfred";
         let searchLastName = "Bester";
         let searchResults = bookInternalService.searchBooks("", searchFirstName, searchLastName);
         console.log(searchResults);
         assert(searchResults.length > 0);
      });

      it("- books by author last name. Should return results", function () {
         let searchLastName = "Baxter";
         let searchResults = bookInternalService.searchBooks("", "", searchLastName);
         console.log(searchResults);
         assert(searchResults.length > 0);
      });

      it("- books by genre. Should return results", function () {
         let searchResults = bookInternalService.searchBooks("", "", "", "fiction");
         assert(searchResults.length > 0);
         console.log(searchResults);
      });

   });
});