import { productCards } from "./product-cards.js"

// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const productTemplate = document.getElementById('product-card-template');
const productList = document.getElementById('product-list');

const displaySelectedProductCards = (productCards) => {
productCards.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-image').src = `/assets/${productCard.img}.png`
  productCardClone.querySelector('.product-category').textContent = productCard.category
  productCardClone.querySelector('.product-name').textContent = productCard.name
  productCardClone.querySelector('.product-description').textContent = productCard.description
  const productCompoundList = productCardClone.querySelector('.product-compound-list')
  productCard.compound.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    productCompoundList.appendChild(li);
  });
  productCardClone.querySelector('.product-price').innerHTML = `${productCard.price} &#8381`
  productList.appendChild(productCardClone)
  console.log(productList)
}) 
}

// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productCardsNameList = productCards.reduce((sum, productCard) => [...sum, productCard.name], [])

const productCardNames = productCardsNameList.join(';')

console.log(productCardNames) 

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const array = productCards.reduce((result, productCard) => [...result, {[productCard.name]: productCard.description}], [])

console.log(array)

// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).

const askCardsCount = () => {
const input = prompt('Сколько карточек отобразить? От 1 до 5');
const count = Number(input);
  if (count >= 1 && count <= 5) {
const selectedProductCards = productCards.slice(0, count);
displaySelectedProductCards(selectedProductCards)
  }}

askCardsCount() 