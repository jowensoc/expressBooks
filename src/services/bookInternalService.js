let books = [{"title": "The Warlock Effect", "authors": ["Andy Nyeman", "Jeremy Dyson"]},
    {"title": "This Wretched Valley", "authors": ["Jenny Kiefer"]},
    {"title": "The Demolished Man", "authors": ["Alfred Bester"]},
    {"title": "Raft", "authors": ["Stephen Baxter"]},
    {"title": "Lucky Man", "authors": ["Michael J. Fox"]}];

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

module.exports = {
    getBooks,
    getAuthors
}