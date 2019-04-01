/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], i, array));
    }
    return newArray;
}
/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    let i = 0
    let accumulator = initial || array[i++];
    for (; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }
    return accumulator;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    let result = false;
    if (prop in obj) result = true;
    return result;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    let props = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            props.push(key);
        }
    }
    return props;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    let props = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            props.push(key.toUpperCase());
        }
    }
    return props;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    let length = array.length;
    if (typeof (to) === 'undefined') to = length;
    if (to < 0) to = length + to;
    if (from < 0) from = 0;
    if (to > length) to = length;
    let newArray = [];
    while (from < to) {
        if (array[from] != undefined)
            newArray.push(array[from++]);
    }
    return newArray;
}
/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    const handler = {
        set: (obj, prop, value) => {
            obj[prop] = value * value;
            return obj[prop];
        }
    };
    const proxy = new Proxy(obj, handler);
    return proxy;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};