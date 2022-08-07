function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

//1.
// Student.prototype.setSubject = (subjectName) => this.subject = subjectName;
// не работает: this = [object Window] !!!
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

// ваш код для остальных методов
// 2.
Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
        this.marks = [];
    }
    this.marks.push(mark);
}
// 3.
Student.prototype.addMarks = function (...markList) {
    if(this.marks === undefined){
        this.marks = [];
    }
    this.marks = this.marks.concat(markList);
}
// 4.
Student.prototype.getAverage = function () {
    return this.marks.reduce((sum, mark) => sum += mark, 0) / this.marks.length;
};
// 5.
Student.prototype.exclude = function (reason) {
    this.excluded = reason;
};
