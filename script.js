const targetElement = document.querySelector('.bookmark');

window.addEventListener('scroll', () => {
  // Hide element after scrolling down more than 400 pixels
  if (window.scrollY > 1200) {
    targetElement.classList.add('hidden');
  } else {
    targetElement.classList.remove('hidden');
  }
});
