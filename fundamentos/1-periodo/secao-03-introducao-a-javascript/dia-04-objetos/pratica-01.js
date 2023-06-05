const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
        {
            title: 'O Senhor dos Anéis - a Sociedade do Anel',
            author: 'J. R. R. Tolkien',
            publisher: 'Martins Fontes',
        },
    ],
};


console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${Object.values(reader.favoriteBooks[0])}'.`);

let newBook = [
    {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    }
];

reader.favoriteBooks.push(newBook);

if (reader['favoriteBooks'].length == 1) {
    console.log("Julia tem 1 livro favorito.");
} else {
    console.log(`Julia tem ${reader['favoriteBooks'].length} livros favoritos.`)
}