// JavaScript Практика Задание 6.

function checkArray(arr, curr = 0) {
    if (arr.length < 2 || curr == arr.length - 1) {
        return true;
    }

    return typeof arr[curr] !== typeof arr[curr + 1]
        ? false
        : checkArray(arr, ++curr)
}

console.log(checkArray([0, 1, 2, 3]))
console.log(checkArray([0, '1', 2, 3]))