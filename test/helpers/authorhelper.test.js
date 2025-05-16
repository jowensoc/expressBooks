const assert = require("assert");
const helper = require("../../src/helpers/authorhelper");



describe("author helper", function () {

    describe("- create author", function() {
        it("- Full name", () => {
            const firstName = "Joe";
            const lastName = "Bloggs";
            const fullName = "Joe Bloggs"

            const expectedResults = {
                "firstname": firstName.toString().trim(),
                "lastname": lastName.toString().trim(),
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults, "Passed"| "Error");
        });

        it("- Extra spaces", () => {
            const firstName = "Joe ";
            const lastName = " Bloggs";
            const fullName = "Joe Bloggs";

            const expectedResults = {
                "firstname": firstName.toString().trim(),
                "lastname": lastName.toString().trim(),
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults);
        });

        it("- Empty first name", () => {
            const firstName = " ";
            const lastName = " Bloggs";
            const fullName = "Bloggs";

            const expectedResults = {
                "firstname": firstName.toString().trim(),
                "lastname": lastName.toString().trim(),
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults);
        });

        it("- Empty last name", () => {
            const firstName = "Joe";
            const lastName = " ";
            const fullName = "Joe";

            const expectedResults = {
                "firstname": firstName.toString().trim(),
                "lastname": lastName.toString().trim(),
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults);
        });

        it("- first name is null", () => {
            const firstName = null;
            const lastName = " Bloggs";
            const fullName = "Bloggs";

            const expectedResults = {
                "firstname": "",
                "lastname": lastName.toString().trim(),
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults);
        });

        it("- last name is null", () => {
            const firstName = "Joe";
            const lastName = null;
            const fullName = "Joe";

            const expectedResults = {
                "firstname": firstName.toString().trim(),
                "lastname": "",
                "fullname": fullName.toString().trim()
            };

            let actualResults = helper.createAuthor(firstName, lastName);
            assert.deepEqual(actualResults, expectedResults);
        });
    });

    describe("- list of authors to string", function() {

        it("- Should return one name", () => {
            const array = [{"firstname":"Joe", "lastname":"Bloggs", "fullname":"Joe Bloggs"}];
            const expectedResults = "Joe Bloggs";

            let actualResults = helper.listOfAuthorsToString(array);
            assert.equal(actualResults, expectedResults);
        });

        it("- Should return multiple names, separated with a comma", () => {
            const array = [{"firstname":"Joe", "lastname":"Bloggs", "fullname":"Joe Bloggs"},
                                                    {"firstname":"Jane", "lastname":"Smith", "fullname":"Jane Smith"},
                                                    {"firstname":"Jim-Bob", "lastname":"Walton", "fullname":"Jim-Bob Walton"}];
            const expectedResults = "Joe Bloggs, Jane Smith, Jim-Bob Walton";

            let actualResults = helper.listOfAuthorsToString(array);
            assert.equal(actualResults, expectedResults);
        });

    });
})