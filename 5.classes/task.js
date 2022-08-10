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
            // alert(`Некорректное значение "state" приведено к нулю!`);
        }
        if (value < 0) {
            this._state = 0;
            // alert(`Значение "state" минимально: 0`);
        } else if (value > 100) {
            this._state = 100;
            // alert(`Значение "state" максимально: 100`);
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

    addBook(book) {
        // if (book.state <= 30) {
        //     alert(`Слишком изношенный экземпляр ${this.presentationBook(book)}\n ${this.name} принять не может!`);
        //     return
        // }
        if (book.state <= 30) return;
        this.books.push(book);
        // if (book.type === null) {
        //     alert(`Неизвестный формат издания "${book.name}" принят в хранилище!\n ${this.presentationBooks()}`);
        // } else {
        //     alert(`${book.type} "${book.name}": экземпляр принят в хранилище!\n ${this.presentationBooks()}`);
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
        // alert(`ВЫДАТЬ Экземпляр с "name" = "${bookName}":\n` +
        //     `ПОИСК:   ${this.presentationBook(foundBook)}\n ${this.presentationBooks()}`);
        if (foundBook !== null) {
            this.books = this.books.filter((book) => book.name !== bookName);
            // alert(`УДАЛЁН экземпляр с "name" = "${bookName}":\n ${this.presentationBook(foundBook)}\n ${this.presentationBooks()}`);
        }
        return foundBook;
    }

    // presentationBook(book) {
    //     switch (book) {
    //         case undefined:
    //             return 'undefined';
    //         case null:
    //             return 'null';
    //         default:
    //             return ((book.type === null) ? `` : `${book.type}:  `) +
    //                 ((book?.name) ? `"${book.name}" ` : ``) +
    //                 ((book?.author) ? `${book.author}` : ``) +
    //                 ((book?.releaseDate) ? `, ${book.releaseDate}` : ``) +
    //                 ((book?.pagesCount) ? `, ${book.pagesCount} стр.` : ``) +
    //                 ((book?.state) ? `, сохранность: ${book.state}` : ``);
    //     }
    // }
    //
    // presentationBooks(title = `Сейчас в хранилище:`) {
    //     let bookList = `${this.books.reduce((reader, book, idx) => {
    //         return reader + `\n${idx + 1})   ${this.presentationBook(book)}`}, title)}`
    //     if (bookList === title) {
    //         bookList += '   нет ни одного экземпляра!';
    //     }
    //     return bookList;
    // }
}


// Задача №3. Журнал успеваемости

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marksLog = null;
        this.excluded = null;
        console.log(`${'Зачислен студент'.toUpperCase()} "${this.name}"!`);
    }

    set name (name) {
        console.log(`Задать ИМЯ:`);
        if (name === undefined || name === null || name.trim() === '') {
            this._name = `ИМЯ не известно!`;
        } else {
            this._name = name.trim();
        }
        console.log(`   Имя студента: ${this._name}.`);
    }

    get name () {
        return this._name;
    }

    set gender (gender) {
        console.log(`Задать Пол:`);
        if (gender === undefined || gender === null || gender.toString().trim() === '') {
            console.log(`   ПОЛ не известен!`);
            return;
        }
        gender = gender.toString().trim();
        if ( !(gender in ['male', 'female']) ) {
            this._gender = gender;
            console.log(`   Пол студента: ${this._gender}.`);
            return;
        }
        console.log(`   ПОЛ не известен!`);
    }

    get gender () {
        return this._gender;
    }

    set age (age) {
        console.log(`Задать ВОЗРАСТ:`);
        age = parseInt(age);
        if (isNaN(age)) {
            console.log(`   ВОЗРАСТ не известен!`);
            return;
        }
        this._age = age;
        console.log(`   ВОЗРАСТ студента: ${this._age}.`);
    }

    get age () {
        return this._age;
    }

    set excluded (reason) {
        if (reason === undefined || reason === null) {
            if (this._excluded) {
                console.log(`\n${this.name} ВОССТАНОВЛЕН!`);
            }
            this._excluded = null;
            return
        }
        reason = reason.toString().trim();
        if (reason.length === 0) {
            reason = 'неизвестная причина';
        }
        this.marksLog = null;
        this._excluded = reason;
        console.log(`\n${this.name} ИСКЛЮЧЕН! Причина: ${reason}.\n     Журнал успеваемости передан в архив.`);
    }

    get excluded () {
        return this._excluded;
    }

    isExcluded () {
        return this.excluded !== undefined
            && this.excluded !== null;
    }

    checkExcluded () {
        if (this.isExcluded()) {
            console.log(this.msgForExcluded());
        } else if (!this.hasMarksLog()) {
            this.setMarksLog();
        }
        return this.isExcluded();
    }

    exclude (reason) {
        this.excluded = reason;
    }

    include (reason) {
        this.excluded = null;
        this.setMarksLog();
        console.log(`\n${this.name} ВОССТАНОВЛЕН! Причина: ${reason}.\n     Восстановлен Журнал успеваемости.`);
    }

    msgForExcluded () {
        return `ВНИМАНИЕ:   ${this.name} был ИСКЛЮЧЕН, а Журнал успеваемости передан в архив!`;
    }

    set marksLog (obj) {
        if (this.isExcluded()) {
            console.log(this.msgForExcluded());
        } else if (!this.hasMarksLog()) {
            this._marksLog = obj;
            if (obj !== null) {
                console.log(`${this.name}: создан Журнал оценок!`);
            }
        }
    }

    get marksLog () {
        return this._marksLog;
    }

    setMarksLog() {
        this.marksLog = {};
    }

    hasMarksLog () {
        return this.marksLog !== undefined
            && this.marksLog !== null;
    }

    checkMarksSheet (subject) {
        let hasMarksSheet = this.marksLog?.[subject];
        if (!hasMarksSheet) {
            this.marksLog[subject] = [];
            console.log(`${this.name}: создана Ведомость оценок по предмету "${subject}"!`);
        }
        return hasMarksSheet;
    }

    printMarksLog () {
        console.log(`\n${this.name}, ЖУРНАЛ успеваемости:`);
        if (this.checkExcluded()) {
            return;
        }
        for (let subject in this.marksLog) {
            console.log(`   Оценки по предмету "${subject}": ${this.marksLog[subject]}. ` +
                `Средний балл: ${this.getAverageBySubject(subject)}`);
        }
        console.log(`   Средний балл по всем предметам: ${this.getAverage()}`);
    }

    addMark (mark, subject) {
        if (subject === undefined || subject === null) {
            console.log(`\n${this.name}. ВНИМАНИЕ:   предмет не определен, проставить оценку в журнал не возможно!`);
            return
        }
        let intMark = parseInt(mark);
        if (isNaN(intMark) || 0 > intMark ||  intMark > 5) {
            console.log(`\n${this.name}. ВНИМАНИЕ:   некорректное значение оценки "${mark}", занести в журнал не возможно! ` +
                `Оценка должна быть числом от 1 до 5`);
            return;
        }
        console.log(`\n${this.name}: Проставим оценку "${intMark}" в Ведомость по предмету "${subject}":`);
        if (this.checkExcluded()) {
            return
        }
        this.checkMarksSheet(subject);
        this.marksLog[subject].push(intMark);
        console.log(`${this.name}: поставлена оценка "${intMark}" в Ведомость по предмету "${subject}"!`);
    }

    addMarks (...markList) {
        let m = [];
        m.push(...markList);
        console.log(`\n${this.name}. Получены данные по оценкам (${m})`);
        let marks = m
            .filter((any) => (typeof any) === 'number')
            .filter((any) => any > 0 && any < 6)
            .map((any) => +any.toFixed(0));
        let subjects = m
            .filter((any) => (typeof any) === 'string')
            .filter((any) => any !== undefined && any !== null && any.length > 0);
        console.log(`${this.name}. Выбраны корректные данные:   предметы (${subjects}) и оценки (${marks})`);
        for (const subject of subjects) {
            console.log(`\n${this.name}: проставим оценки (${marks}) в Ведомость по предмету "${subject}":`);
            if (this.checkExcluded()) {
                return
            }
            this.checkMarksSheet(subject);
            this.marksLog[subject].push(...marks);
            console.log(`${this.name}: проставлены оценки (${marks}) в Ведомость по предмету "${subject}"!`);
        }
    }

    getAverageBySubject (subject) {
        if (this.marksLog?.[subject]) {
            return +(
                (this.marksLog[subject].reduce((sum, mark) => sum + mark, 0) / this.marksLog[subject].length
                ).toFixed(2)
            );
        }
        console.log(`${this.name}. ВНИМАНИЕ:   для подсчета среднего балла выбран Несуществующий предмет "${subject}"!`);
        return 0;
    }

    printAverageBySubject (subject) {
        const average = this.getAverageBySubject(subject);
        let msg = `${this.name}. Средний балл по предмету "${subject}"`;
        if (average < 1 || average > 6) {
            msg += ` не определен.`;
        } else {
            msg += `: ${average}.`;
        }
        console.log(msg);
        return average;
    }

    getAverage () {
        const  marksLog = Object.values(this.marksLog);
        // alert(`Подсчитаем средний балл по всем предметам:\n оценки по всем предметам:   ${marksLog}`);
        return +(
            (marksLog.reduce(
                (summa, marksSheet) => summa + marksSheet.reduce(
                    (sum, mark) => sum + mark, 0
                    ) / marksSheet.length, 0
                ) / marksLog.length
            ).toFixed(2)
        );
    }

    printAverage () {
        const average = this.getAverage();
        console.log(`${this.name}. Средний балл по всем предметам: ${average}`);
        return average;
    }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5);
student.addMark(5, "geometry");
student.addMark(2, "geometry");
student.addMark(6, "geometry");

student.printAverageBySubject("geometry");
student.printAverageBySubject("biology");

student.printAverage();

student.addMarks('biology', 'chemical', 5);
student.addMarks(4, 3, 55, 'algebra', 'geometry', true, '');

student.printMarksLog();

student.exclude("за попытку подделать оценки");
student.printMarksLog();
student.exclude();

console.log('\n');

