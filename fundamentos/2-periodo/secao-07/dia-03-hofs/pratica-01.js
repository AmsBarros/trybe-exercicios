// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const evenNumbersSum = evenNumbers.reduce((acc, curr) => acc + curr);
console.log(evenNumbersSum);

const evenNumbersSum2 = numbers.reduce((acc, curr) => curr % 2 === 0? acc + curr : acc);
console.log(evenNumbersSum2);

/* GABARITO

const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;
const sumNumbers = (array) => array.filter(isEven).reduce(sum);
console.log(sumNumbers(numbers)); // 152

const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;
const sumNumbers = (array) => array.filter(isEven).reduce(sum);
console.log(sumNumbers(numbers)); // 152
*/