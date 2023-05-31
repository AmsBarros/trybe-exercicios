let salarioBruto = 3000;
let descontoINSS;
let descontoIR;
let salarioBase;
let salarioLiquido;

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


if (salarioBase > 4664.68) {
    descontoIR = (salarioBase * 27.5) / 100 - 869,36;
    salarioLiquido = salarioBase - descontoIR;
} else if (salarioBase <= 4664.68 && salarioBase >= 3751.06) {
    descontoIR = (salarioBase * 22.5) / 100 - 636.13;
    salarioLiquido = salarioBase - descontoIR;
} else if (salarioBase <= 3751.05 && salarioBase >= 2826.66) {
    descontoIR = (salarioBase * 15) / 100 - 354.80;
    salarioLiquido = salarioBase - descontoIR;
} else if (salarioBase <= 2826.65 && salarioBase >= 1903.99) {
    descontoIR = (salarioBase * 7.5) / 100 - 142.80;
    salarioLiquido = salarioBase - descontoIR;
} else {
    descontoIR = 0;
    salarioLiquido = salarioBase - descontoIR;
}


console.log(salarioBruto);
console.log(descontoINSS);
console.log(salarioBase);
console.log(salarioLiquido)

/*GABARITO

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));
*/