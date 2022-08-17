// Домашнее задание к лекции 8 «Декораторы»
// Задача 1. Усовершенствуйте кэширующий декоратор

function cachingDecoratorNew(func) {
    wrapper.cache = [];
    wrapper.found = (hash) => wrapper.cache.find(([thisHash, thisValue]) => thisHash === hash);
    wrapper.notFound = (hash) => !wrapper.cache.length || !wrapper.found(hash);

    function wrapper(...args) {
        const hash = args.join(",");
        console.log('\n', hash);
        let [thisHash, thisValue] = wrapper.notFound(hash) ? [] : wrapper.found(hash);
        console.log(!thisHash ? 'not found' : "found: ", thisHash, ", ", thisValue);
        if (thisHash) {
            console.log("Из кэша: " + thisValue);
        } else {
            thisValue = func.call(this, ...args);
            if (wrapper.cache.push([hash, thisValue]) > 5) {
                wrapper.cache.shift();
            }
            console.log("Вычисляем: " + thisValue);
            wrapper.cache.forEach(([thisHash, thisValue]) => console.log('[', thisHash, ',',  thisValue, ']'));
        }
    }

    return wrapper;
}

function cachingDecoratorNew2(func) {
    wrapper.cache = {};
    wrapper.last5 = () => Object.fromEntries(Object.entries(wrapper.cache)
        .filter(([hash, value], idx, cache, l = cache.length) => l <= 5 || l > 5 && idx >= l - 5));

    function wrapper(...args) {
        const hash = args.join(",");
        console.log('\n', hash);
        if (hash in wrapper.cache) {
            console.log("Из кэша: " + wrapper.cache[hash]);
        } else {
            wrapper.cache[hash] = func.call(this, ...args);
            wrapper.cache = wrapper.last5();
            console.log("Вычисляем: " + wrapper.cache[hash]);
            console.log(wrapper.cache);
        }
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
