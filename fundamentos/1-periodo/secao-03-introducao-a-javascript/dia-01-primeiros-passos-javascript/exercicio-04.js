let lado1 = 60;
let lado2 = 70;
let lado3 = 50;

if (lado1 + lado2 + lado3 == 180) {
    console.log("true");
} else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("ERRO. Insira um número positivo.");
} else {
    console.log("false");
}