const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

const totalFruits = {};

for (let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index];
    if (totalFruits[fruit]) {
        totalFruits[fruit] += 1;
    } else {
        totalFruits[fruit] = 1;
    }
};

// Convertemos o objeto result em um array
const entries = Object.entries(totalFruits);

// Criação de um novo array
let newArray = [];

// Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
for (let index = 0; index < entries.length; index += 1) {
  if (entries[index][1] > 1) {
    newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
  } else {
    newArray.push(`${entries[index][1]} ${entries[index][0]}`);
  }
};

// Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
console.log(`Sua cesta possui: ${newArray.join(', ')}.`);

//for (let key in totalFruits) {
//    console.log(`Sua cesta possui ${totalFruits[key]} ${key}s.`)
//}

//console.log(`Sua cesta possui ${Object.keys(totalFruits)} ${Object.values(totalFruits)}`)