const { createAuthor } = require("../helpers/authorhelper");

let books = [{"title": "The Warlock Effect",
                                    "category": "fiction",
                                    "authors": [ createAuthor("Andy","Nyman"),
                                                createAuthor("Jeremy","Dyson")]},
    {"title": "This Wretched Valley",
        "category": "horror",
        "authors": [ createAuthor("Jenny", "Kiefer")]},
    {"title": "Ark",
        "category": "sci-fi",
        "authors": [createAuthor("Stephen", "Baxter")]},
    {"title": "The Demolished Man",
        "category": "sci-fi",
        "authors": [createAuthor("Alfred","Bester")]},
    {"title": "Raft",
        "category": "sci-fi",
        "authors": [createAuthor("Stephen", "Baxter")]},
    {"title": "The Stand",
        "category": "horror",
        "authors": [createAuthor("Stephen", "King")]},
    {"title": "Memorial",
        "category": "fiction",
        "authors": [createAuthor("Bryan", "Washington")]},
    {"title": "Salem''s Lot",
        "category": "horror",
        "authors": [createAuthor("Stephen", "King")]},
    {"title": "Lucky Man",
        "category": "non-fiction",
        "authors": [createAuthor("Michael J.", "Fox")]}];

const getBooks = () => {
    return books;
}

const getAuthors = () => {
    let authors = [];

    for(let bookIdx=0; bookIdx < books.length; bookIdx++) {
        let authorsLength = books[bookIdx].authors.length;

        for(let authorIdx= 0; authorIdx < authorsLength; authorIdx++) {
            let authorName = books[bookIdx].authors[authorIdx];

            if (!authors.includes(authorName)) {
                authors.push(authorName);
            }
        }
    }

    return authors;
}

const getCategories = () => {
    let categories = [];

    for(let bookIdx=0; bookIdx < books.length; bookIdx++) {
        if (!categories.includes(books[bookIdx].category)) {
            categories.push(categories);
        }
    }

    return categories;
}

const searchBooks = (title = "", firstname= "", lastName= "", category= "") => {
    let fullName = firstname.toString().trim() + " " + lastName.toString().trim();
    fullName = fullName.trim();
    category = category ? category.trim().trim() : ""

    let searchResults = [];

    searchResults = books.filter(item => item.title.includes(title)
        && item.category.includes(category)
        && item.authors.some(authorItem => authorItem.fullname.includes(fullName)));

    return searchResults;
}

module.exports = {
    getBooks,
    getAuthors,
    getCategories,
    searchBooks
}