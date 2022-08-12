// Задача №1. Форматтер чисел

const parseCount = (value) => {
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
        console.log(`parsed = ${parsed}`);
    } catch (err) {
        parsed = err;
        console.log(`value = ${value}`);
    } finally {
        return parsed;
    }
    // return parsed;
}


// Задача №2. Треугольник


