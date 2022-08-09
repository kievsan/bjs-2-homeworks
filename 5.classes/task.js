// Задача №1. Печатное издание

class PrintEditionItem {
    types = {
        magazine: ["magazine",],
        book: ["book", "novel", "fantastic", "detective"]
    };
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
            alert(`Некорректное значение "state" приведено к нулю!`);
        }
        if (value < 0) {
            this._state = 0;
            alert(`Значение "state" минимально: 0`);
        } else if (value > 100) {
            this._state = 100;
            alert(`Значение "state" максимально: 100`);
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount); // super должен быть до первого this
        this.type = "magazine";
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


// Задача №2. Библиотека

class Library {
    constructor (name) {
        this.name = name.toString();
        this.books = [];
    }

    presentationBook(book) {
        return ((book.type === null) ? `` : `${book.type}:  `) +
            ((book?.name) ? `"${book.name}" ` : ``) +
            ((book?.author) ? `${book.author}` : ``) +
            ((book?.releaseDate) ? `, ${book.releaseDate}` : ``) +
            ((book?.pagesCount) ? `, ${book.pagesCount} стр.` : ``) +
            ((book?.state) ? `, сохранность: ${book.state}` : ``);
    }

    presentationBooks(title = `Сейчас в хранилище:\n`) {
        return `${this.books.reduce((reader, book, idx) => {
            return reader + `${idx + 1})   ${this.presentationBook(book)}\n`}, title)}`
    }

    addBook(book) {
        // if (book.state <= 30) {
        //     alert(`Слишком изношенный экземпляр ${this.presentationBook(book)}\n ${this.name} принять не может!`);
        //     return
        // }
        if (book.state <= 30) return;
        this.books.push(book);
        // if (book.type === null) {
        //     alert(`Неизвестный формат издания "${book.name}" принят в хранилище!\n${this.presentationBooks()}`);
        // } else {
        //     alert(`${book.type} "${book.name}": экземпляр принят в хранилище!\n${this.presentationBooks()}`);
        // }
    }

    findBookBy(attribute, value) {
        let foundBook = this.books.find((book) => {
            return book?.[attribute] && book[attribute] === value;
        });
        return (foundBook === undefined) ? null : foundBook;
        // if (foundBook === undefined) {
        //     foundBook = null;
        //     alert(`Экземпляр с "${attribute}" = "${value}" не найден!\n ${this.presentationBooks()}`);
        // } else {
        //     alert(`Экземпляр с "${attribute}" = "${value}" найден:\n ${this.presentationBook(foundBook)}`);
        // }
        // return foundBook;
    }

    giveBookByName(bookName) {
        let foundBook = this.findBookBy('name', bookName);
        if (foundBook) {

        }
        return foundBook;
    }
}



