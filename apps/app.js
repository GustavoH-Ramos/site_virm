function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
const backToTopButton = document.querySelector('.retorno')

const backToTop = () => {
 if (window.scrollY >= 1200) {
backToTopButton.classList.add('visible')
 } else {
backToTopButton.classList.remove('visible')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})

function menuShow() {
  let menuServicos = document.querySelector('.menu');
  if (menuServicos.classList.contains('open')) {
      menuServicos.classList.remove('open')
  } else {
      menuServicos.classList.add('open');
  }
}

function menuChange() {
  let menu = document.querySelector('.vetorx');
  let menu2 = document.querySelector('.combobox');
  if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      menu2.classList.add('open');
  } else {
      menu.classList.add('open');
      menu2.classList.remove('open');
  }
}