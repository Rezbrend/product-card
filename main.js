// Покраска первой карточки

const productCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = 'red';
})

// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeColorCardsButton = document.querySelector ('#change-color-cards-button');
const greenColorHash = '#00FF00';

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
  })

// Открыть страницу Google.com

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle () {
  const answer = confirm('Вы действительно хотите открыть Google?');
  
  if (answer === true) {
    window.open ('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Вывод заголовка в консоль

const outputLogTitle = document.querySelector('.title');

outputLogTitle.addEventListener('mouseover', () => outputConsoleLog('Выбери свой продукт'))

function outputConsoleLog(message) {
  console.log(message)
}

// Добавление кнопки, при нажатии на которую меняется цвет

const changeColorButton = document.querySelector('#change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('bg-yellow');
});