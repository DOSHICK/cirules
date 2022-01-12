var input = document.getElementById('license-input');
var buttonStart = document.getElementById('button-start');
var emailInput = document.getElementById('form-email');
var emailPlaceholder = document.getElementById('email-placeholder');

var cookie = document.getElementById("cookie")
var cookieBtn1 = document.getElementById("reject-btn");
var cookieBtn2 = document.getElementById("acept-btn")

input.onclick = function () {
  if (input.checked) {
    buttonStart.classList.toggle('active');
  }
  else {
    buttonStart.classList.remove('active');
  }
}

emailInput.onkeyup = function () {
  if (emailInput.value != "") {
    emailPlaceholder.classList.add('choosen')
  } else {
    emailPlaceholder.classList.remove('choosen')
  }
}

cookieBtn1.onclick = function () {
  cookie.classList.add('disable')
}
cookieBtn2.onclick = function () {
  cookie.classList.add('disable')
}
