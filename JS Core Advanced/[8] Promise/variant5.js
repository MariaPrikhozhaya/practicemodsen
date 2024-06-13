'use strict'


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте
// так, чтобы каждый последующий промис через 3 секунды возводил в квадрат результат 
// предыдущего промиса. После окончания манипуляций выведите числовой результат в консоль.


const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(7);
    }, 2000);
});

const secondPromise = firstPromise.then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result ** 2);
        }, 3000);
    });
});

const thirdPromise = secondPromise.then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result ** 2);
        }, 3000);
    });
});

thirdPromise.then((result) => {
    console.log(result);
});
