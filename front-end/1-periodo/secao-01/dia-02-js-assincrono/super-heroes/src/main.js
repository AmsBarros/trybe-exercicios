import Swal from 'sweetalert2';
import './style.css';

const button = document.querySelector('#btn');
const card = document.querySelector('#img');
const name = document.querySelector('#superhero-name');
const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const heroNumber = 1000;

const generateRandomId = () => Math.floor(Math.random() * heroNumber);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const randomId = generateRandomId();

  fetch(`${BASE_URL}/id/${randomId}.json`)
    .then((response) => response.json())
    .then((data) => {
      card.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch(() => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'ERROR: Super herói não encontrado',
      confirmButtonText: 'OK',
    }));
});
