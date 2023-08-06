const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function stopClick(event) {
    event.preventDefault();
}

hrefLink.addEventListener('click', stopClick);

inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
});

inputText.addEventListener('keypress', (event) => {
    const letters = event.key;
    if (letters != 'a') {
        event.preventDefault();
    }
});