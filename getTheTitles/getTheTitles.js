const getTheTitles = function(books) {
    let titles = books.map((book) => { return book.title;
    });
    return titles;
}

module.exports = getTheTitles;
