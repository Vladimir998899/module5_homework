// JavaScript Практика Задание 2.

let x = 1,
    result;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof (x) === 'string') && typeof (x)) {
    case 'number':
        result = 'x -число';
        break;
    case 'string':
        result = 'x - строка';
        break;
    case 'boolean':
        result = 'x - логическое';
        break;
    default:
        result = 'Тип x не определён'
}
console.log(result);
