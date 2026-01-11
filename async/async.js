const userCardTemplate = document.getElementById('user-card-template');
const userList = document.getElementById('user-list');
const status = document.getElementById('status');
const getAllCardBtn = document.getElementById('get-all-card-btn');
const deleteAllCardBtn = document.getElementById('delete-all-card-btn');
const deleteOneCardBtn = document.getElementById('delete-one-card-btn');

async function initUsers() {
  try {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    renderUsers(JSON.parse(storedUsers));
    return;
  }
  status.textContent = 'Данные загружаются';
  const response = await fetch('users.json');
  if (!response.ok) {
  throw new Error('Не удалось загрузить файл users.json');
  }
  const data = await response.json();

  setTimeout(() => {
    localStorage.setItem('users', JSON.stringify(data.users));
    renderUsers(data.users);
}, 5000);
  } catch (error) {
    status.textContent = `Ошибка: ${error.message}`;
    console.error('Ошибка загрузки данных:', error);
  }
}

function renderUsers(users) {
  userList.innerHTML = '';
  if (users.length === 0) {
      userList.innerHTML = '<p>Нет пользователей</p>';
      return;
  }
users.forEach(user => {
  const userClone = userCardTemplate.content.cloneNode(true);
  userClone.querySelector('.user-img').src = `/assets/${user.img}.png`
  userClone.querySelector('.user-id').textContent = `ID: ${ user.id }`
  userClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`
  userClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`
  userClone.querySelector('.user-email').textContent = `Почта: ${ user.email }`
  userClone.querySelector('.user-age').textContent = `Возраст: ${ user.age } лет`
  const deleteBtn = userClone.querySelector('.delete-one-card-btn');
  deleteBtn.dataset.userId = user.id;
  deleteBtn.addEventListener('click', handleDeleteUser);
  userList.appendChild(userClone)
  })}
  
function handleDeleteUser(event) {
  const userId = parseInt(event.target.dataset.userId);
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  const updatedUsers = storedUsers.filter(user => user.id !== userId);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

function handleDeleteAllUsers() {
  localStorage.removeItem('users');
  renderUsers([]);
}
  
async function handleGetAllUsers() {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  if (storedUsers && storedUsers.length > 0) {
    alert('Все пользователи уже отображены!');
    return;
  }

  try {
    status.textContent = 'Перезагрузка данных...';
    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error('Не удалось получить данные');
    }

    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data.users));
    renderUsers(data.users);
  } catch (error) {
    status.textContent = `Ошибка загрузки: ${error.message}`;
    console.error(error);
  }
}

getAllCardBtn.addEventListener('click', handleGetAllUsers);
deleteAllCardBtn.addEventListener('click', handleDeleteAllUsers)

initUsers();