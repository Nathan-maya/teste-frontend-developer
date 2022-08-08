// ACCORDION
const accordion = document.getElementsByClassName('faq-acordion-content');

//Ao adicionar a classe active, o acordion ira mostrar seu conteudo
//Quando o usuario clicar no mesmo acordio, ele ira fechar
for (i = 0; i < accordion.length; i++) {

  // não utilizar THIS em arrow function, pois this se tornara WINDOW
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// Contador de caracteres
const msg = document.querySelector('#mensagem');
const limitMsg = document.querySelector('#limitMsg');

//Enquanto o usuário estiver digitando, ira mostra no rodape do textarea
//quantos caracteres faltam para atingir o maximo de caracteres permitido
msg.addEventListener('input', function (e) {
  const inputLength = msg.value.length;
  console.log('houve evento');
  const maxChars = 500;
  let restante = maxChars - inputLength;
  if (inputLength >= maxChars) {
    e.preventDefault();
    console.log(inputLength);
    limitMsg.style.color = 'red';
  }
  limitMsg.innerHTML = restante;
});


// InputLabel
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

// Loader

// Loader Page
const overlay = document.querySelector('.ring-bg');
const count = document.querySelector('.ring-count');
const target = +count.getAttribute('data-target');
const btnSubmit = document.querySelector('.btn');

function countTo() {
  //transformando count de string para number
  let from = +count.innerText;
  let to = target;
  let step = to > from ? 1 : -1;
  let interval = 15;


  if (from == to) {
    count.textContent = from;
    return;
  }
  
  //Adicionando tempo de carregamento
  let counter = setInterval(() => {
    from += step;
    count.textContent = from + '%';
    if (from === to) {
      clearInterval(counter);
      overlay.style.display = 'none';
    }
  }, interval);
}

//Quando a pagina carregar, o pre loader sera ativado
window.addEventListener('load', () => {
  countTo()
});


// Botao MENU
const btnMobile = document.getElementById('btn-mobile');

//Expandir menu
function toggleMenu() {
  const nav = document.querySelector('.menu-nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

// scrollSpy
const section = document.querySelectorAll('section');
const link = document.querySelectorAll('.nav-link');
let time = null;

//Verificando e informando ao usuario onde ele esta na tela
function scrollSpy() {
  //Debounce
  clearInterval(time);
  time = setTimeout(() => {
    //Passando por cada secao e verificando a localizacao
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top > offset && top < offset + height) {
        link.forEach((link) => {
          link.classList.remove('active');
          document
            .querySelector('.nav-link[href*=' + id + ']')
            .classList.add('active');
        });
      }
    });
  }, 50);
}

window.addEventListener('scroll', scrollSpy);

// ScrollSuave

//Pegar somente link interno
const menuNav = document.querySelectorAll('.nav-link[href^="#"]');
const btnMobileScroll = document.getElementById('btn-mobile');

//Quando o usuario clicar, realiar a funcao scrollSuave
menuNav.forEach((acao) => {
  acao.addEventListener('click', scrollSuave);
});

function scrollSuave(event) {
  event.preventDefault();
  const element = event.target;
  element.classList.add('active')
  const id = element.getAttribute('href');
  const section = document.querySelector(id);
  const navScroll = document.querySelector('.menu-nav')
  navScroll.classList.toggle('active')
  
  window.scroll({
    top: section.offsetTop - 80,
    behavior:"smooth"

  });
}


