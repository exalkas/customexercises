// The Cat
class Cat {
    constructor(name) {
        this.tiredness = 50;
        this.hunger = 50;
        this.lonliness = 50;
        this.happiness = 50;
        this.name = name;
        console.log("Your name is: ", this.name)
    }

    feed(amount) {
        this.hunger -= amount;
        console.log('My hunger is:', this.hunger)
    }

    sleep(amount) {
        this.tiredness -= amount;
        console.log('My Tiredness is:', this.tiredness)
    }

    pet(amount) {
        if (this.tiredness < 40) {
            console.log(`Don't touch me you #@!$`)
        } else {
            this.lonliness -= amount;
        }
    }

}

const jim = new Cat('Jim');
jim.feed(10)
jim.sleep(30);
jim.pet(20)

console.log(jim.name)
const jane = new Cat('Jane');

/**
 * The Reading List
 */
const books = []

function addBook(book) {
    books.push(book);
}

// accepts book object. object contains prop isbn
function removeBook(index) {

    books.splice(index, 1);
}

// clients have name, lastname, address, id
function lendBook(book, client) {
    book.client = client.id;
}

function returnBook(book) {
    book.client = '';
    
}

const book1 = {
    title: 'The story of my life',
    isnb: 12345,
    author: 'John Doe',
    genres: 'Thriller',
    pages: 123
}

addBook(book1);


class Booklist {

    // books, categories, genres

    // add new books, remove books, print the list, what is the next book
    // lend a book
    // return a book
    // clients that get the books
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(index) {

        this.books.splice(index, 1);
    }

    bookIsRead(book) {
        book.read = true;
    }

}

class Book {

    // title, desccription, author, pages, isbn, genres
    // date of rent
    // book is away
    constructor(title, isbn, author, genres, pages) {
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.genres = genres;
        this.pages = pages;
        this.read = false;
    }
}



const book1 = new Book('The story of my life', 12345, 'John Doe', 'Thriller', 123)

const myLibrary = new Booklist();

myLibrary.addBook(book1)

myLibrary.bookIsRead(book1)

/////////////////////////////////////////////////////
onclick = 'createBook';
function createBook(e) {
    const book = {};

    book.title = e.title;
    book.title = e.title;
    book.title = e.title;
    book.title = e.title;

    sendBookToServer(e);
}

function sendBookToServer(book) {
    //contact the server, send the data and get a response
}