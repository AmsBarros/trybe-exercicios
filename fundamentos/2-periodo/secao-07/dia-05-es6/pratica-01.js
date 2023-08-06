// ARRAY DESTRUCTURING

// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}
sum(primeNumbers[0], primeNumbers[2]) // 54
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [primeNumbers1, primeNumbers2, primeNumbers3] = primeNumbers;
sum(primeNumbers1, primeNumbers3);


// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida);


// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
[odd1, odd2, odd3, even1, even2, even3, even4] = numerosPares;
numerosPares = [even1, even2, even3, even4];
console.log(numerosPares);
// Gabarito:
[,,, ...numerosPares] = numerosPares;

// Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
