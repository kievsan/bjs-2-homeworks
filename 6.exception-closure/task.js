// Задача №1. Форматтер чисел

const parseCount = (value) => {
    let parsingIntValue = parseInt(value);
    if (isNaN(parsingIntValue)) {
        throw new Error("Невалидное значение");
    }
    return parsingIntValue;
}

const validateCount = (value) => {
    console.log(`value = "${value}"`);
    let parsed = null;
    try {
        parsed = parseCount(value);
    } catch (err) {
        parsed = err;
    }
    return parsed;
}
console.log(`from "task.js", validateCount(): ${validateCount('dhbfhn')}`);
// console.log(`from "task.js", parseCount(): parsed = ${parseCount('erwytwhg')}`);


// Задача №2. Треугольник

class Figure {
    constructor (...sidesLengths) {
        const [hasIncorrectSide, correctedLengths] = this.hasIncorrectSide(...sidesLengths);
        this.sides = correctedLengths;
        console.log(`Создадим ${this.name} (${Array.of(...sidesLengths).join(',')}):`);
        if (hasIncorrectSide || this.size < 3 || this.hasBrokeRules() ) {
            throw new Error(this.name + ' с такими сторонами не существует');
        }
        console.log(`Создан ${this.name}: (${this.sides.join(',')})`);
    }

    hasIncorrectSide (...sidesLengths) {
        let values = Array.of(...sidesLengths)
            .map((value) => parseFloat(value))
        return [values.some((value) => isNaN(value) || value <= 0), values];
    }

    hasBrokeRules () {
        // Любая сторона меньше суммы всех остальных - многоугольник
        return !this.sides.reduce(
            (check, len, idx, sides) => check && len < sides.reduce(
                    (sum, len, i) => (i !== idx ? sum + len : sum), 0)
            , true)
    }

    getPerimeter () {return this.sides.reduce((p, sideLength) => p + sideLength, 0);}

    getArea () {
        const p  = this.getPerimeter() / 2;
        const [a,b,c] = this.sides;
        return this.size === 3
            ? +(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3))
            : 'Ошибка! Недостаточно данных для вычислений';
    }

    set sides (value) {
        if (!this?._sides) {
            this._sides = value;
        }
    }
    get sides() {return this._sides}
    get size() {return this.sides.length}
    // get name() {return this.size + (this.size < 5 ? '-х' : '-ти') + 'угольник'}
    get name() {
        switch (this.size) {
            case 3:
                return 'Треугольник';
            case 4:
                return 'Четырёхугольник';
            default:
                return this.size + '-тиугольник'
        }
    }
}


class Triangle extends Figure {
    constructor (a,b,c) {
        super(a,b,c);
    }
}


function getTriangle (a,b,c) {
    let triangle;
    let errMsg = 'Ошибка! Треугольник не существует';
    try {
        triangle = new Triangle(a,b,c);
    } catch (err) {
        triangle = {
            getPerimeter: () => {
                // return err;
                return errMsg;
            },
            getArea: () => {
                // return err;
                return errMsg;
            }
        }
        console.log(`Создан треугольник-ФАНТОМ: (${a}, ${b}, ${c})!`);
    }
    return triangle;
}

// ПРОВЕРКА:

console.log('\n\nЗадача №2. Треугольник\n ');

triangle = new Triangle(1,3,3);
console.log('\n ');

triangle = new Triangle(2,5,5);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

triangle = new Triangle(6,10,15);
triangle.c = -55;
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

// triangle = new Triangle(1,3,100);
//
// triangle = new Triangle(100,3,10);
//
// triangle = new Triangle(1,300,10);

triangle = getTriangle(1,3,100);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

triangle = getTriangle(100,3,10);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

triangle = getTriangle(1,300,10);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

getTriangle(2,5,5)
console.log('\n ');

triangle = getTriangle(1,3, 100);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

//------------

triangle = getTriangle(0,-1,100);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

triangle = getTriangle(1,3);
console.log(`P = ${triangle.getPerimeter()}`);
console.log(`S = ${triangle.getArea()}`);
console.log('\n ');

triangle = getTriangle(1,2, '3');
console.log('\n ');

triangle = getTriangle(1,3, '3м');
console.log('\n ');
