import './homework-4.js'
import './homework-5.js'
import './homework-6.js'
import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import {Modal} from './homework-10/modal.js';
import {Form} from './homework-10/form.js';
import {Car, GybridCar} from './homework-10/car.js';

// 3. Создать базовый класс для модального окна.

let user = null;

const authModal = new Modal('modal');

const authBtn = document.querySelector('#openModalBtn');
authBtn.addEventListener('click', () => {
  authModal.open()})

const checkModalBtn = document.querySelector('#checkModalBtn');
checkModalBtn.addEventListener('click', () => {
console.log('Модальное окно открыто:', authModal.isOpen())
});

const closeBtn = document.querySelector('#closeModalBtn');
closeBtn.addEventListener('click', () => {
  authModal.close()})

// 4. Создать базовый класс для формы.

const regForm = new Form('regForm');

regForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regForm.isValid()) return;
  const formData = regForm.getValues();
  if (formData.password !== formData.confirmPassword) {
    console.log('Регистрация отклонена!');
    return;
  }

  user = formData;
  user.createdOn = new Date();
  console.log('Пользователь зарегистрирован:', user);

  regForm.reset();
  const closeModalBtn = document.querySelector('#closeModalBtn');
  closeModalBtn.addEventListener('click', authModal.close());
});

const loginForm = new Form('loginForm');
const messageEl = document.getElementById('message');

loginForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!loginForm.isValid()) return;
  const { login, password } = loginForm.getValues();
  if (user && login === user.login && password === user.password) {
    user.lastLogin = new Date();
    messageEl.style.color = 'green';
    messageEl.textContent = 'Успешный вход!';
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Неверный логин или пароль';
  }
});

// 5. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами).

const lada = new Car('ВАЗ 2107', '2011', '47000')
lada.buy()

const bmw = new GybridCar('bmw', '2022', '25000', 'дизелем')
bmw.buy()
bmw.refuel()