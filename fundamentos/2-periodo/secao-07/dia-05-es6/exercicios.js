// EXERCICIO 1
// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

const swap = ([n1, n2, n3]) => [n3, n2, n1];

console.log(swap(myList));


// EXERCÍCIO 2
//Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (list) => {
  const [name, brand, year] = list;
  return {name, brand, year};
};
// Gabarito: const toObject = ([name, brand, year]) => ({ name, brand, year });
console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));


// EXERCICIO 3
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

const greet = (name, salute = 'Hi') => `${salute}, ${name}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


//EXERCICIO 4
// Escreva uma função getLastName que receba como parâmetro um objeto contendo informações de uma pessoa. Essa função deve retornar a propriedade lastName para o objeto passado, porém, caso o objeto não tenha essa propriedade, a função deve retornar a mensagem lastName não preenchido.

const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student2 = {
  name: `Vitor`,
  age: 20,
}

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
const getLastName = (objeto) => {
  const { lastName = 'lastName não preenchido' } = objeto;
  return lastName;
};

console.log(getLastName(student1));
console.log(getLastName(student2));


// EXERCICIO 5
// Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:

const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);