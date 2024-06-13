'use strict'


// Напишите функцию, принимающую параметр data. Функция всегда должна возвразать Promise. 
// В случае, если параметр возвращает не число, верните Promise reject с ошибкой 'Error'. 
// В случае, если параметр возвращает нечетное число, то верните Promise через одну секунду 
// c результатом 'Odd'. Если параметр возвращает четное число, то верните Promise через две 
// секунды c результатом 'Even'.


function getPromise(data) {
    return new Promise((resolve, reject) => {
      if (typeof data != 'number') {
        reject('Error');
      } else {
        if (data % 2 !== 0) {
          setTimeout(() => resolve('Odd'), 1000);
        } else {
          setTimeout(() => resolve('Even'), 2000);
        }
      }
    });
  }

getPromise(5)
    .then(result => console.log(result)) // Выведет 'Odd' через секунду
    .catch(error => console.error(error)); // Выведет 'Error' в случае нечислового ввода

getPromise(4)
    .then(result => console.log(result)) // Выведет 'Even' через две секунды
    .catch(error => console.error(error));

getPromise('hello')
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Выведет 'Error'