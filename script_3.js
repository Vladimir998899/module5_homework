// JavaScript Практика Задание 3.

let reverse = a => a.split('')//Разбиваем строку на массив символов
    .reverse() //Инвертируем порядок следования элементов в массиве
    .join(''); //Объединяем массив обратно в строку

console.log(reverse('Hello'));
