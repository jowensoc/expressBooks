const { createAuthor } = require("../helpers/authorhelper");

// let books = [{"title": "The Warlock Effect", "authors": ["Andy Nyman", "Jeremy Dyson"]},
//     {"title": "This Wretched Valley", "authors": ["Jenny Kiefer"]},
//     {"title": "Ark", "authors": ["Stephen Baxter"]},
//     {"title": "The Demolished Man", "authors": ["Alfred Bester"]},
//     {"title": "Raft", "authors": ["Stephen Baxter"]},
//     {"title": "The Stand", "authors": ["Stephen King"]},
//     {"title": "Memorial", "authors": ["David Mitchell"]},
//     {"title": "Salem''s Lot", "authors": ["Stephen King"]},
//     {"title": "Lucky Man", "authors": ["Michael J. Fox"]}];

let books = [{"title": "The Warlock Effect", "authors": [ createAuthor("Andy","Nyman"), createAuthor("Jeremy","Dyson")]},
    {"title": "This Wretched Valley", "authors": [ createAuthor("Jenny", "Kiefer")]},
    {"title": "Ark", "authors": [createAuthor("Stephen", "Baxter")]},
    {"title": "The Demolished Man", "authors": [createAuthor("Alfred","Bester")]},
    {"title": "Raft", "authors": [createAuthor("Stephen", "Baxter")]},
    {"title": "The Stand", "authors": [createAuthor("Stephen", "King")]},
    {"title": "Memorial", "authors": [createAuthor("David", "Mitchell")]},
    {"title": "Salem''s Lot", "authors": [createAuthor("Stephen", "King")]},
    {"title": "Lucky Man", "authors": [createAuthor("Michael J.", "Fox")]}];

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

const searchAuthors = (firstname="", lastName= "") => {
    let fullName = firstname.toString().trim() + " " + lastName.toString().trim();
    fullName = fullName.trim();

    let searchResults = [];

    //searchResults = books.filter(item => item.authors.includes(fullName));
    searchResults = books.filter(item =>
                                item.authors.filter(authorItem => authorItem.includes(fullName)));

    return searchResults;
}

const searchBooks = (title = "", firstname= "", lastName= "") => {
    let fullName = firstname.toString().trim() + " " + lastName.toString().trim();
    fullName = fullName.trim();

    let searchResults = [];

    //searchResults = books.filter(item => item.title.includes(title) || item.authors.includes(fullName))
    if (!title && !fullName) {
        searchResults = books;
    } else if (title && !fullName) {
        searchResults = books.filter(item => item.title.includes(title))
    } else if (!title && fullName) {
        // searchResults = books.filter(item => item.authors.includes(fullName))
        searchResults = books.filter(item =>
                                    item.authors.filter(authorItem => authorItem.fullname.includes(fullName)))
    } else {
        searchResults = books.filter(item => item.title.includes(title) && item.authors.includes(fullName))
    }

    return searchResults;
}

module.exports = {
    getBooks,
    getAuthors,
    searchAuthors,
    searchBooks
}