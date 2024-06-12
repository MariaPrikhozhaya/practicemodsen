'use strict'


// Напишите функцию, которая принимает массив и возвращает минимальное число.


// номер 1
function findMinimumElement (arr) {
    let min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i];
        }
    }
    return min;
}

// номер 2
function findMinimumElement2 (arr) {
    return Math.min(...arr);
}

console.log(findMinimumElement([1, 5, 8, 0, -6, 9])); //-6
console.log(findMinimumElement2([1, 5, 8, 0, -6, 9])); //-6