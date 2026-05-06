const bgOverlay = document.getElementById('bg-overlay');
const banner    = document.getElementById('banner');
const section1  = document.getElementById('section1');
const section2  = document.getElementById('section2');
const footer    = document.getElementById('footer');

const REVEAL_DELAY = 700;

const sections = [banner, section1, section2, footer];
sections.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add('visible');
  }, i * REVEAL_DELAY);
});

// Fundo branco some junto com o aparecimento do banner
setTimeout(() => {
  bgOverlay.style.opacity = '0';
}, 100);
