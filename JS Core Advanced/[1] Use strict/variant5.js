'use strict'


// Напишите функцию, которая принимает строку и возвращает массив слов, из которых
// она состоит. Используйте строгий режим.


function createArray (str) {
    return str.split(" ");
}

console.log(createArray("Цели никогда не должны быть простыми"));