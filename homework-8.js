import { productCards } from "./product-cards.js"

// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const productTemplate = document.getElementById('product-card-template');
const productList = document.getElementById('product-list');

productCards.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-image').src = productCard.img
  productCardClone.querySelector('.product-category').textContent = productCard.category
  productCardClone.querySelector('.product-name').textContent = productCard.name
  productCardClone.querySelector('.product-description').textContent = productCard.description
  productCardClone.querySelector('.product-compound').textContent = productCard.compound
  productCardClone.querySelector('.product-compound-item-1').textContent = productCard.compoundItem1
  productCardClone.querySelector('.product-compound-item-2').textContent = productCard.compoundItem2
  productCardClone.querySelector('.product-compound-item-3').textContent = productCard.compoundItem3
  productCardClone.querySelector('.product-price-label').textContent = productCard.priceLabel
  productCardClone.querySelector('.product-price').innerHTML = productCard.price
  productList.appendChild(productCardClone)
  console.log(productList)
})

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const namesProductCards = productCards.reduce((sum, productCard) => [...sum, productCard.name], [])

const namesProductCardsStr = namesProductCards.toString()

console.log(namesProductCardsStr) 

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const array = productCards.reduce((result, productCard) => [...result, {[productCard.name]: productCard.description}], [])

console.log(array)

// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).

const askCardsCount = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = Number(input);
  const displaySelectedProductCards = productCards.slice(0, count);
  
    if (count >= 1 && count <= 5) {
  const productTemplate = document.getElementById('product-card-template');
  const productList = document.getElementById('product-list');

  displaySelectedProductCards.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-image').src = productCard.img
  productCardClone.querySelector('.product-category').textContent = productCard.category
  productCardClone.querySelector('.product-name').textContent = productCard.name
  productCardClone.querySelector('.product-description').textContent = productCard.description
  productCardClone.querySelector('.product-compound').textContent = productCard.compound
  productCardClone.querySelector('.product-compound-item-1').textContent = productCard.compoundItem1
  productCardClone.querySelector('.product-compound-item-2').textContent = productCard.compoundItem2
  productCardClone.querySelector('.product-compound-item-3').textContent = productCard.compoundItem3
  productCardClone.querySelector('.product-price-label').textContent = productCard.priceLabel
  productCardClone.querySelector('.product-price').innerHTML = productCard.price
  productList.appendChild(productCardClone)
    }); 
  }
  return displaySelectedProductCards
}

window.addEventListener('DOMContentLoaded', () => {
  askCardsCount();
})