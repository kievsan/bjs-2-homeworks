class PrintEditionItem {
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
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        alert(`Book: ${this.type}, ${this.author} (${author})`);
    }
}


class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
        alert(`NovelBook: ${this.type}, ${this.author} (${author})`);
    }
}


class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
        alert(`FantasticBook: ${this.type}, ${this.author} (${author})`);
    }
}


class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
        alert(`DetectiveBook: ${this.type}, ${this.author} (${author})`);
    }
}


