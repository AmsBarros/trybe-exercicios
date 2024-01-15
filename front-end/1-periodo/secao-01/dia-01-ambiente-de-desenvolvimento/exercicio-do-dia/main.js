// Importando a biblioteca
import validator from 'validator';
import './style.css';

// Capturando os campos da página por ids
const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#output');

// Linter reclama que 4 é um magic number,
// então criada const para representar esse número.
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  // O preventDefault() vai evitar que ao clicar no botão, a página seja recarregada
  event.preventDefault();

  // Objeto cujas chaves são os tipos a serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
  const opcoes = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
    url: validator.isURL(campoDeTexto.value),
    hexColor: validator.isHexColor(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
  };

  // O objeto 'opcoes' possui chaves com o mesmo nome
  // das opções do seletor na página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  textoDeSaida.innerHTML = `A validaçao retornou ${opcoes[seletor.value]}`;
});
