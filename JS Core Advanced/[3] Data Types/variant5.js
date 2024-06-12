'use strict'


// Функция принимает два целых числа и должна возвращать true, если первое число
// без остатка делится на второе.


function devide (num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    }
    else 
        return false;
}

console.log(devide (23, 7)) //false
console.log(devide (12, 3)) //true