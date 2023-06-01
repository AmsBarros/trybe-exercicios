const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let message = '';
let maiorValor = 0;
let numerosImpares = 0;
let message2 = '';

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    soma += numbers[i];
}

media = soma / numbers.length;

if (media > 20) {
    message = 'O valor da média aritmética é maior que 20';
} else {
    message = 'O valor da média aritmética é menor ou igual a 20';
}

for (let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numerosImpares += 1;
        message2 = (`Quantidade de valor ímpares: ${numerosImpares}`);
    } else {
        message2 = 'Nenhum valor ímpar encontrado.';
    }
}

console.log(soma);
console.log(media);
console.log(message);
console.log(maiorValor);
console.log(message2);