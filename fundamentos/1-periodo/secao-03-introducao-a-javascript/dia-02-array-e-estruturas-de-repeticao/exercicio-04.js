/*let n = 5;

for (let i = 1; i <= n; i++) {
    let linha = '';
    for (let j = 1; j <= n; j++) {
      linha += '*';
    }
    console.log(linha);
  }
*/

  /*GABARITO*/

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
