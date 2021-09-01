import '../scss/main.scss';

const buttonSave = document.querySelector(".button-save--js");
const buttonLoad = document.querySelector(".button-load--js");

const textFromEditor = document.querySelector('.textarea--js');

if (localStorage.getItem('myText')) {
    textFromEditor.value = localStorage.getItem('myText');
} else {
    textFromEditor.value = '';
}

buttonSave.addEventListener('click', () => {
    console.log("SAVE")
    localStorage.setItem('myText', textFromEditor.value);
})

buttonLoad.addEventListener('click', () => {
    console.log("LOAD")
    textFromEditor.value = localStorage.getItem('myText');
})