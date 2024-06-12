'use strict'


// Напишите функцию JavaScript для поиска первого неповторяющегося символа.


function findFirstUniqueSymbol(arr) {
    let count;
    let symb;
    let min = -1;
    for (let i=0; i<arr.length; i++) {
        count = 0;
        for (let j=0; j<arr.length; j++) {
            if (arr[i]==arr[j]) {
                count++;
            }
       }
       if (count==1) {
        symb = arr[i];
        min = i;
        break;
       }
    }
    if (min==-1) {
        return "такого значения нет";
    } else 
        return symb;
}

console.log(findFirstUniqueSymbol([1, 5, 7, 1, 8, 8])) // 5