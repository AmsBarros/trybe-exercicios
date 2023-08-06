
const pessoa = {
  nome: "João",
  sobrenome: "Silva",
  idade: 30,
};

const habilidades = {
  linguagem: "JavaScript",
  nivel: "Avançado",
};

const pessoaComHabilidades = {
  ...pessoa,
  habilidades: { ...habilidades },
};

console.log(pessoaComHabilidades);


// Exemplo com mais pessoas dentro do objeto
const pessoas = [
  {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
  },
  {
    nome: "Maria",
    sobrenome: "Santos",
    idade: 25,
  },
  // Mais objetos de pessoas...
];

const habilidadesList = {
  linguagem: "JavaScript",
  nivel: "Avançado",
};

const pessoasComHabilidades = pessoas.map((pessoa) => ({
  ...pessoa,
  habilidades: { ...habilidadesList },
}));

console.log(pessoasComHabilidades);


const pessoas = [
  {
    id: 1,
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
  },
  {
    id: 2,
    nome: "Maria",
    sobrenome: "Santos",
    idade: 25,
  },
  // Mais objetos de pessoas...
];

const habilidades = [
  {
    id: 1,
    linguagem: "JavaScript",
    nivel: "Avançado",
  },
  {
    id: 2,
    linguagem: "HTML",
    nivel: "Intermediário",
  },
  // Mais objetos de habilidades...
];

const pessoasComHabilidades = pessoas.map((pessoa) => ({
  ...pessoa,
  habilidades: habilidades.filter((habilidade) => habilidade.id === pessoa.id),
}));

console.log(pessoasComHabilidades);



const cart = [
  {
    name: "laptop",
    price: 1000,
    quantity: 2,
    id: 3,
  },
  {
    name: "desktop",
    price: 1500,
    quantity: 1,
    id: 2,
  },
  {
    name: "phone",
    price: 500,
    quantity: 3,
    id: 1,
  },
];

const valorInicial = 0;
const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, valorInicial);

console.log(totalCart);