let user = undefined

// Уровень 1
// 4. К Форме, которая прикреплена в футере - добавить логику: email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.

const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries());
  console.log(data)
})

// Уровень 2
// 5. Создать форму для регистрации. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля.
// 6. Сохраняем этот объект в переменную для дальнейшего использования.

const registrationForm = document.querySelector('#registration-form')
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValue = Object.fromEntries(formData.entries());
  if (formValue.password !== formValue.confirmPassword) {
    registrationForm.innerHTML = 'Регистрация отклонена!';
    return;
  }
  user = formValue;
  user.createdOn = new Date()
  console.log(user)
})

// Уровень 3
// 7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, практикуем css.
// 8. Создать модальное окно, используя классы "modal, modal-showed".
// 9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти".
// 10. Создаем глобальную переменную "currentUser".

const authBtn = document.querySelector('.auth-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('loginForm');
const messageEl = document.getElementById('message');

authBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login === user.login && password === user.password) {
    const currentUser = user;
    currentUser.lastLogin = new Date()
    messageEl.style.color = 'green';
    messageEl.textContent = 'Успешный вход!';
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Неверный логин или пароль';
  }
});