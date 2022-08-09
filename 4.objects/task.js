function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

//2.
// Student.prototype.setSubject = (subjectName) => this.subject = subjectName;
// не работает: this = [object Window] !!!
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

// ваш код для остальных методов
// 3.
Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [];
    }
    this.marks.push(mark);
}
// 4.
Student.prototype.addMarks = function (...markList) {
    if (this.marks === undefined) {
        this.marks = [];
    }
    this.marks.push(...markList); // push метод может принимать множество аргументов
    // this.marks = this.marks.concat(markList); // Старайтесь не использовать concat для добавления элементов в массив
}
// 5.
Student.prototype.getAverage = function () {
    return this.marks.reduce((sum, mark) => sum += mark, 0) / this.marks.length;
};
// 6.
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};
