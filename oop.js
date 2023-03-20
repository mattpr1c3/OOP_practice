class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Shelf {
  constructor() {
    this.books = [];
    this.tchotchkes = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  addTchotchkes(tchotchke) {
    this.tchotchkes.push(tchotchke);
  }
}

const lordOfTherings = new Book(
  "Lord of the rings: Return of the King",
  "JRRTolkien",
  "fantasy"
);
console.log(lordOfTherings);

const topShelf = new Shelf();
topShelf.addBook(lordOfTherings);
console.log(topShelf);
