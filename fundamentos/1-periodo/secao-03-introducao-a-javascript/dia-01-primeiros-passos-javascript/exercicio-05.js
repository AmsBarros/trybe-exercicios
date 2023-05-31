let pecaXadrez = 'ReI';
let palavraEmMinusc = pecaXadrez.toLowerCase();

switch(palavraEmMinusc) {

    case 'bispo':
        console.log("Diagonais");
        break;
    case 'peão':
        console.log('Frente');
        break;
    case 'cavalo':
        console.log('Forma de L');
        break;
    case 'torre':
        console.log('Horizontal e vertical');
        break;
    case 'rainha':
        console.log('Horizontal, vertical e diagonal');
        break;
    case 'rei':
        console.log('Horizontal, vertical e diagonal');
        break;
    default:
        console.log('ERRO! Peça inválida.')
}