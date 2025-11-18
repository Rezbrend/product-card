import { commentsSocialNetwork } from "./comments.js"

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = numbers.filter(number => number >= 5)

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const films = ['Легенда', 'Воин', 'Прикуп']

const findEntity = films.includes('Воин')

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . 

const reverseArray = (array) => {
  return array.reverse();
}

reverseArray(numbers)
console.log(numbers)

reverseArray(films)
console.log(films)

// 5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива.

// 6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export".

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const arrayWithCom = commentsSocialNetwork.filter(comment => comment.email.endsWith(".com"))

console.log(arrayWithCom)

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedPostId = commentsSocialNetwork.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}))

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const arrayIdName = commentsSocialNetwork.map(comment => {
  return {
    id: comment.id,
    name: comment.name
}
})

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const addIsInvalid = commentsSocialNetwork.map(comment => {
  return {
    isInvalid: comment.body.length > 180
}
})

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const sumEmails = commentsSocialNetwork.reduce(function (sum, comment) {
  return sum + comment.email
})
console.log(sumEmails)

const allEmails = commentsSocialNetwork.map(sum => sum.email)
console.log(allEmails)

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const sumEmailsStr = sumEmails.toString()

console.log(sumEmailsStr)

const allEmailsStr = allEmails.join()

console.log(allEmailsStr)