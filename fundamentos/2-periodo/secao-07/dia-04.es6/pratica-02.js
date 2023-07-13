// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allInfo = {...user, ...jobInfos};

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const { name: nome, age: idade, nationality: nacionalidade, profession: profissao, squad: time, squadInitials: timeIniciais } = allInfo;

console.log((`Hi, my name is ${nome}, I'm ${idade} years old and I'm ${nacionalidade}. I work as a ${profissao} and my squad is ${timeIniciais}-${time}`));
