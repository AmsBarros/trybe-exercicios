import './style.css';

const dogBtn = document.querySelector('#btn-dog');
const catBtn = document.querySelector('#btn-cat');
const surpriseBtn = document.querySelector('#btn-surprise');
const image = document.querySelector('#img');
const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';


dogBtn.addEventListener('click', () => {
  fetch(DOG_API)
  .then((res) => res.json())
  .then((data) => {
    image.src = data.message;
  })
});

catBtn.addEventListener('click', () => {
  fetch(CAT_API)
  .then((res) => res.json())
  .then((data) => {
    image.src = data[0].url;
  })
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch(DOG_API),
    fetch(CAT_API)
  ])
  .then((result) => result.json())
  .then((data) => {
    const surpriseImg = data.message || data[0].url;
    image.src = surpriseImg;
  })
});