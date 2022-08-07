const mail = document.querySelector('#email');

if (mail.innerHTML.length > 1) {
  mail.style.background = 'red';
}

window.addEventListener('input', function () {
  if (mail.value.length >= 1) {
    mail.classList.add('active');

  }else{
    mail.classList.remove('active');
  }
});
