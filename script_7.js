// JavaScript Практика Задание 7.

let arr = [5, 7, 33, 0.22, 12, null, undefined]
let numberCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' || !isNaN(arr[i])) {
        numberCount += 1;
        if (arr[i] === 0) {
            zeroCount += 1;
        } else if (arr[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
}
console.log(`В массиве: ${numberCount} цифр, ${zeroCount} нулей, ${evenCount} четных, ${oddCount} нечетных!`)
