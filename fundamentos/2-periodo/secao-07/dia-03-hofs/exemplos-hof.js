const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

/* FOREACH: Mostre no console o nome das pessoas do array pessoas.
 Saída: Nome: Joana
Nome: Ana
Nome: João
Nome: Aline */
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

/* FIND: Encontre a primeira pessoa chamada 'Aline.
Saída: { nome: 'Aline', idade: 28 } */
console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline'));

/*SOME: Verifique se alguma pessoa tem mais de 30 anos.
Saída: true */
console.log(pessoas.some((pessoa) => pessoa.idade > 30));

/*EVERY: Verifique se todas as pessoas tem mais de 30 anos.
Saída: false */
console.log(pessoas.every((pessoa) => pessoa.idade > 30));

/*SORT: Ordene o array pessoas da pessoa mais nova pra mais velha.
Saída: [
  { nome: 'Ana', idade: 25 },
  { nome: 'Aline', idade: 28 },
  { nome: 'João', idade: 32 },
  { nome: 'Joana', idade: 37 }
] */
console.log(pessoas.sort((a, b) => a.idade - b.idade));

/* MAP: Crie um novo array contendo os nomes de cada pessoa.
Saída: [ 'Ana', 'Aline', 'João', 'Joana' ] */
console.log(pessoas.map((pessoa) => pessoa.nome));

/*FILTER: Encontre todas as pessoas que tem mais de 30 anos.
Saída: [ { nome: 'João', idade: 32 }, { nome: 'Joana', idade: 37 } ] */
console.log(pessoas.filter((pessoa) => pessoa.idade > 30));

/*REDUCE: Some a idade de todas as pessoas.
Saída: 122 */
console.log(pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0))