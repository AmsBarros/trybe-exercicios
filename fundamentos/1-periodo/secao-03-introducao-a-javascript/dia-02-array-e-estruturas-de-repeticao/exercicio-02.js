const numFatorial = 10;
let fatorial = 1;

for (i = numFatorial; i >= 1; i -= 1) {
    fatorial *= i;
}

console.log(`${numFatorial}! = ${fatorial}`);