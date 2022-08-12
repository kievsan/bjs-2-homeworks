// Задача №1. Форматтер чисел

const parseCount = (value = 'fjmfjm') => {
    let parsed = null;
    let parsingIntValue = parseInt(value);
    if (isNaN(parsingIntValue)) {
        throw new Error("Невалидное значение")
    } else {parsed = parsingIntValue}
    return parsed;
}

const validateCount = (value = 'fjmfjm') => {
    let parsed = null;
    try {
        parsed = parseCount(value);
        console.log(`from validateCount(), try{}:   parsed = ${parsed}`);
    } catch (err) {
        parsed = err;
        console.log(`from validateCount(), catch{}:   value = ${value}`);
    } finally {
    }
    return parsed;
}
console.log(`from "task.js", validateCount(): parsed = ${validateCount()}`);
// console.log(`from "task.js", parseCount(): parsed = ${parseCount()}`);


// Задача №2. Треугольник

const Figure = class {
    hasValidatedSides(...sides) {
        const numerableControl = (value) => {
            let parsed = null;
            let parsingFloatValue = parseFloat(value);
            if (isNaN(parsingFloatValue)) {
                throw new Error("Невалидное значение")
            } else {parsed = parsingFloatValue}
            return parsed;
        }

        const validateControl = (value = 1) => {
            let validatedValue;
            try {
                validatedValue = numerableControl(value);
                console.log(`from validateControl(), try{}:   validatedValue = ${validatedValue}`);
            } catch (err) {
                console.log(`from validateControl(), catch{}:   value = ${value}, ${err}`);
            }
            return validatedValue;
        }

        const isValidated = (...values) => {
            for (const value of Array.of(...values)) {
                if (!validateControl(value)) {return false}
            }
            return true
        }

        return isValidated(...sides);
    }
}


const Triangle = class extends Figure {
    err = 'Треугольник с такими сторонами не существует';

    constructor(a, b, c) {
        super();
        if (this.hasValidatedSides(a,b,c) &&
            a + b < c || a + c < b || b + c < a) {throw new Error(this.err)}
        this.a = a;
        this.b = b;
        this.c = c;
        console.log(`Создан треугольник: (${a}, ${b}, ${c})`);
    }

    getPerimeter (a = this.a, b = this.b, c = this.c) {
        return a + b + c;
    }

    getArea (a = this.a, b = this.b, c = this.c) {
        let p  = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }

    set a(value) {
        if (this._a === undefined) {
            this._a = value;
        }
    }
    set b(value) {
        if (this._b === undefined) {
            this._b = value;
        }
    }
    set c(value) {
        if (this._c === undefined) {
            this._c = value;
        }
    }

    get a() {return this._a}
    get b() {return this._b}
    get c() {return this._c}
}


const getTriangle = (a,b,c) => {
    let triangle;
    let errMsg = 'Ошибка! Треугольник не существует';
    try {
        triangle = new Triangle(a,b,c);
    } catch (err) {
        triangle = {
            getPerimeter: () =>{ return errMsg},
            getArea: () => { return errMsg}
            }
        console.log(`Создан треугольник-фантом: (${a}, ${b}, ${c})!`);
    }
    return triangle;
}


console.log('\n\nЗадача №2. Треугольник\n ');
let triangle = new Triangle(1,3,3);
console.log('\n ');

triangle = new Triangle(2,5,5);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log('\n ');

triangle = new Triangle(6,10,15);
triangle.c = -55;
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log('\n ');

// triangle = new Triangle(1,3,100);
//
// triangle = new Triangle(100,3,10);
//
// triangle = new Triangle(1,300,10);

getTriangle(2,5,5)
console.log('\n ');

triangle = getTriangle(1,3,100);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log('\n ');

