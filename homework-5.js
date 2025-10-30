// 3. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию"

function showsTemperature (city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
  }

  showsTemperature ('Москве', '25')
  
// 4. Создать переменную, которая хранит внутри себя скорость звука

const SPEED_OF_SOUND = 343
let speed = 100

if (speed > SPEED_OF_SOUND) {
  console.log('Сверхзвуковая скорость')
} else {
  console.log('Дозвуковая скорость')
}

// 5. Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену (на ваше усмотрение).

const product = 'Телефон'
let price = 5000
let budget = 4000

if (budget > price) {
  console.log(`${product} приобретён. Спасибо за покупку!`)
} else {
  console.log('Вам не хватает 1000$, пополните баланс')
}

// 6. Создать 1 функцию и именовать её по своему усмотрению

function showsPower (power) {
  console.log(`У Ауди мощность ${power}`)
  }

  showsPower ('250 сил')

// 7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

const boilingPointOfWater = 100
let color = 'зелёный'
var hello = 'hello world'