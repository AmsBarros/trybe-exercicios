const n = 5;

for (let i = 1; i <= n; i++) {
  let linha = '';

  // Adiciona espaços em branco antes dos asteriscos
  for (let j = 1; j <= n - i; j++) {
    linha += ' ';
  }

  // Adiciona os asteriscos
  for (let k = 1; k <= i; k++) {
    linha += '*';
  }

  console.log(linha);
}

/*GABARITO
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
*/