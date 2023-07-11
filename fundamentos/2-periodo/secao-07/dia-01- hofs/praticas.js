// EXEMPLOS FOR.EACH

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']



const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => {
    console.log(element * 2); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
});

// REFATORANDO
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => console.log(element * 2));
// OU

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => console.log(element * 2);

numbers.forEach(multiply);



// EXEMPLOS .FIND

const employees = [
    { id: 1, nome: 'Douglas Adams', idade: 20 },
    { id: 2, nome: 'H. G. Wells', idade: 18 },
    { id: 3, nome: 'Júlio Verne', idade: 57 },
    { id: 4, nome: 'Margaret Atwood', idade: 83 },
    { id: 5, nome: 'Edgar Allan Poe', idade: 19 },
];

employees.find((employee) => employee.id === 2).nome; // H. G. Wells
employees.find((employee) => employee.nome === 'Margaret Atwood').id; // 4

// praticas do conteúdo

const numbers = [19, 21, 30, 3, 45, 22, 15]; // Encontrar primeiro número do array que é divisível por 3 e 5, caso ele exista.
console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));
// OU
const multiplos = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(multiplos);


const names = ['João', 'Irene', 'Fernando', 'Maria']; // Econtre primeiro nome com cinco letras
const findingName = names.find((name) => name.length === 5);
console.log(findingName);
// OU
const findNameWithFiveLetters = () => {
    return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());


const musicas = [ // Encontre a música com id igual a 31031685, caso ela exista
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((music) => music.id === '31031685').title);
// OU
const findMusic = musicas.find((musica) => musica.id === '31031685');
console.log(findMusic);


// EXEMPLOS SOME

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo); // true
// No código acima, é verificado se dentro do array de pessoas existe alguém que possua o cargo de 'Gerência'. O retorno foi true porque existe pelo menos uma pessoa com esse cargo.

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

console.log(verificaCargo); // false
// Agora, utilizando a mesma lógica, verifica se existe uma pessoa com o cargo de 'Product Owner'.

// Verifica se exsite algum nome que comece com a letra desejada.
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false


//EXEMPLOS .EVERY

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};
const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
// De olho na dica 👀: para manter seu código conciso e evitar que erros aconteçam, você pode utilizar o método toLowerCase() para deixar todos os itens do array com letras minúsculas. Por exemplo: grade.toLowerCase() === 'aprovado'
console.log(verifyGrades);

// pratica do conteudo

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna']; // Lista de convidados do casamento. Veriricar se o nome da pessoa consta na lista ou não.

const hasName = (arr, name) => arr.some((currentname) => currentname === name);
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


const people = [ // Verifica se todas as pessoas possuem a idade mínima especificada.
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
