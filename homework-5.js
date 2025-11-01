// 3. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию"

function showCityTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
}

showCityTemperature('Москве', '25')

// 4. Создать переменную, которая хранит внутри себя скорость звука

const SPEED_OF_SOUND = 343

function compareTransmittedSpeed(speed) {
if (speed > SPEED_OF_SOUND) {
  console.log("Сверхзвуковая скорость");
} else if (speed < SPEED_OF_SOUND) {
  console.log("Дозвуковая скорость");
} else {
  console.log("Скорость звука");
}
}

compareTransmittedSpeed('100')

// 5. Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену (на ваше усмотрение).

const product = 'Телефон'
const price = '5000'

function checkBudget(budget) {
if (budget >= price) {
  console.log(`${product} приобретён. Спасибо за покупку!`)
} else {
  const difference = price - budget
  console.log(`Вам не хватает ${difference}$, пополните баланс`)
}
}

checkBudget('3000')

// 6. Создать 1 функцию и именовать её по своему усмотрению

function showPowerCar(car, power) {
  console.log(`У ${car} мощность ${power} сил`)
}

showPowerCar('BMW','250')

// 7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

const temperatureBoilWater = '100'
let age = 20
let carColor = 'зелёный'