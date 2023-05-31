let salarioBruto = 6000;
let descontoINSS;
let descontoIR;
let salarioBase;

if (salarioBruto <= 1556.94) {
    descontoINSS = (salarioBruto * 8) / 100;
    salarioBase = salarioBruto - descontoINSS;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoINSS = (salarioBruto * 9) / 100;
    salarioBase = salarioBruto - descontoINSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189,82) {
    descontoINSS = (salarioBruto * 11) / 100;
    salarioBase = salarioBruto - descontoINSS;
} else {
    descontoINSS = 570.88;
    salarioBase = salarioBruto - descontoINSS; 
}


console.log(salarioBruto);
console.log(descontoINSS);
console.log(salarioBase);