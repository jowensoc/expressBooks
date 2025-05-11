const assert = require("assert");
const helper = require("../../src/helpers/authorhelper")

describe("author helper", function () {

    it("- create author", () => {
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

    it("- create author - extra spaces", () => {
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

    it("- create author - empty first name", () => {
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

    it("- create author - empty last name", () => {
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

    it("- create author - null first name", () => {
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

    it("- create author - null last name", () => {
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
})