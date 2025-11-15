// 3. Создайте объект на основе ваших данных.

const person = {
  name: "Коля",
  age: 24,
  country: "Россия",
  job: "Менеджер"
}

// 4. Создайте объект, который будет хранить данные об автомобиле

const car = {
  brand: "Ауди",
  model: "Q3",
  releaseTime: 2022,
  color: "чёрный",
  gear: "автомат"
}
car.owner = person

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.

const checkSpeed = (object) => {
  if (object.maxSpeed) {
    return
  } else {
    object.maxSpeed = 220
  }
}

checkSpeed(car)

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

const getObjectValue = (object,property) => {
  return object[property];
}
console.log(getObjectValue(car,'color'))

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ['Хлеб','Сок','Макароны','Печенье','Чай']

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу

const myBooks = [
  {
    name: 'Отцы и дети',
    author: 'Тургенев',
    year: 1860,
    coverColor: 'серый',
    genre: 'классика'
  },
  {
    name: 'Господа Головлёвы',
    author: 'Салтыков-Щедрин',
    year: 1875,
    coverColor: 'белый',
    genre: 'классика'
  },
  {
    name: 'Парфюмер',
    author: 'Зюскинд',
    year: 1985,
    coverColor: 'белый',
    genre: 'притча'
  }
]

myBooks.push(
  {
    name: 'Анна Карелина',
    author: 'Толстой',
    year: 1877,
    coverColor: 'синяя',
    genre: 'классика'
  }
)

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее).

const booksHarryPotterUniverse = [
  {
    name: 'гарри Поттер и философский камень',
    author: 'Роулинг',
    year: 1862,
    coverColor: 'серый',
    genre: ' фэнтези'
  },
  {
    name: 'Гарри Поттер тайная комната',
    author: 'Роулинг',
    year: 1911,
    coverColor: 'синий',
    genre: ' фэнтези'
  },
  {
    name: 'Гарри Поттер',
    author: 'Роулинг',
    year: 1899,
    coverColor: 'белый',
    genre: ' фэнтези'
  }
]

const books = [...myBooks, ...booksHarryPotterUniverse]

// 10. Почитать про метод массива — forEach. Написать функцию, которая принимает массив сущностей с задания №9.

const checkYearBook = (books) => {
  books.forEach(book => {
    book.isRare = book.year > 2000
  });
}

console.log(books)