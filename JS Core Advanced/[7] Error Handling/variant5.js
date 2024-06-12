'use strict'


// Напишите функцию, которая использует блок try-catch для перехвата и обработки ошибки
// «ReferenceError» при доступе к неопределенной переменной.


function handleError() {
    try {
        console.log (number);
    } catch(err) {
        console.log ("You have ReferenceError. Define the variable before accessing it.");
    }
}

handleError();