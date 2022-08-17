// Домашнее задание к лекции 8 «Декораторы»
// Задача 1. Усовершенствуйте кэширующий декоратор

function cachingDecoratorNew(func) { // [ {hash,val}, {hash,val}, ...]
    wrapper.cache = [];
    wrapper.found = (hash) => wrapper.cache.find(
        (hashObj, i, cache, thisHash = Object.entries(hashObj).flat()[0]) => thisHash === hash);
    wrapper.notFound = (hash) => !wrapper.cache.length || !wrapper.found(hash);
    wrapper.cacheToString = () => wrapper.cache.reduce(
        (str, hashObj, i, cache, pairHashValue = Object.entries(hashObj).flat()) =>
            str + ` {${pairHashValue[0]}: ${pairHashValue[1]}}`, ``);

    function wrapper(...args) {
        let result, action;
        const hash = args.join(",");
        console.log('\n', hash);
        result = wrapper.notFound(hash) ? [] : wrapper.found(hash);
        let [thisHash, thisValue] = Object.entries(result).flat();
        console.log(!thisHash ? 'not found' : "found");
        if (thisHash) {
            result = 'Из кэша: ' + thisValue;
            action = '';
        } else {
            thisValue = func.call(this, ...args);
            if (wrapper.cache.push({[hash]: thisValue}) > 5) {
                wrapper.cache.shift();
                action = 'Удаляем самый старый кэш.';
            }
            result = 'Вычисляем: ' + thisValue;
            action = 'Добавляем новый кэш.' + (action ? ` ${action}` : '');
            action += `\n[${wrapper.cacheToString()} ]`;
        }
        console.log(`${result}. ${action}`);
        return result;
    }

    return wrapper;
}

function cachingDecoratorNew2(func) { // [ [hash,val], [hash,val], ...]
    wrapper.cache = [];
    wrapper.found = (hash) => wrapper.cache.find(([thisHash, thisValue]) => thisHash === hash);
    wrapper.notFound = (hash) => !wrapper.cache.length || !wrapper.found(hash);
    wrapper.cacheToString = () => wrapper.cache.reduce(
        (str, [thisHash, thisValue]) => str + ` [${thisHash}: ${thisValue}]`, ``);

    function wrapper(...args) {
        let result, action;
        const hash = args.join(",");
        console.log('\n', hash);
        let [thisHash, thisValue] = wrapper.notFound(hash) ? [] : wrapper.found(hash);
        console.log(!thisHash ? 'not found' : "found");
        if (thisHash) {
            result = 'Из кэша: ' + thisValue;
            action = '';
        } else {
            thisValue = func.call(this, ...args);
            if (wrapper.cache.push([hash, thisValue]) > 5) {
                wrapper.cache.shift();
                action = 'Удаляем самый старый кэш.';
            }
            result = 'Вычисляем: ' + thisValue;
            action = 'Добавляем новый кэш.' + (action ? ` ${action}` : '');
            action += `\n[${wrapper.cacheToString()} ]`;
        }
        console.log(`${result}. ${action}`);
        return result;
    }

    return wrapper;
}

function cachingDecoratorNew3(func) { // { {hash: val}, {hash: val}, ...}
    wrapper.cache = {};
    wrapper.cacheToString =  () => Object.entries(wrapper.cache)
        .reduce((res, [thisHash, thisValue]) => res + ` {${thisHash}: ${thisValue}}`, ``);
    wrapper.last5 = () => Object.fromEntries(Object.entries(wrapper.cache)
        .filter(([hash, value], idx, cache, l = cache.length) => l <= 5 || l > 5 && idx >= l - 5));

    function wrapper(...args) {
        let result, wrapperCache;
        const hash = args.join(",");
        console.log('\n', hash);
        if (hash in wrapper.cache) {
            result = 'Из кэша: ' + wrapper.cache[hash];
            wrapperCache = ``;
        } else {
            wrapper.cache[hash] = func.call(this, ...args);
            wrapper.cache = wrapper.last5();
            result = 'Вычисляем: ' + wrapper.cache[hash];
            wrapperCache = `Добавляем:  { ${wrapper.cacheToString()} }`;
        }
        console.log(result, '\t', wrapperCache);
        return result;
    }

    return wrapper;
}


// Задача 2. Debounce декоратор с моментальным вызовом

function debounceDecoratorNew(func) {
  // Ваш код
}


// Задача 3. Усовершенствуйте debounceDecoratorNew

function debounceDecorator2(func) {
  // Ваш код
}
