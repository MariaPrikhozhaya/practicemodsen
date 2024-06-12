'use strict'


// Напишите функцию для расчета факториала числа. Функция должна принимать число в
// качестве аргумента и возвращать его факториал. Учтите использование строгого режима


function factorial (number) {
  if (number==0) {
    return 1;
  }
  else {
    return number*factorial(number-1);
  }
}


console.log(factorial(7));