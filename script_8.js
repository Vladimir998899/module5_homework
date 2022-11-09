// JavaScript Практика Задание 8.

let vegetables = new Map([
    ['cucumber', 'green'],
    ['tomato', 'red'],
    ['banana', 'yellow']
]);
vegetables.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});