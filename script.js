const targetElement = document.querySelector('.bookmark');

window.addEventListener('scroll', () => {
  // Hide element after scrolling down more than 400 pixels
  if (window.scrollY > 1200) {
    targetElement.classList.add('hidden');
  } else {
    targetElement.classList.remove('hidden');
  }
});



const trigger = document.querySelector('.electronic');
const hiddenImg = document.querySelector('.electronics');

trigger.addEventListener('mouseenter', () => {
  hiddenImg.style.display = 'inline-block'; // Or toggle a CSS class
});

trigger.addEventListener('mouseleave', () => {
  hiddenImg.style.display = 'none';
});



const trigge = document.querySelector('.motor');
const hiddenIm = document.querySelector('.motors');

trigge.addEventListener('mouseenter', () => {
  hiddenIm.style.display = 'inline-block'; // Or toggle a CSS class
});

trigge.addEventListener('mouseleave', () => {
  hiddenIm.style.display = 'none';
});