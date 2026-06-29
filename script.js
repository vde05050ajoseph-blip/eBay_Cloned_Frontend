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
  hiddenImg.style.display = 'inline-block'; 
});

trigger.addEventListener('mouseleave', () => {
  hiddenImg.style.display = 'none';
});



const trigge = document.querySelector('.motor');
const hiddenIm = document.querySelector('.motors');

trigge.addEventListener('mouseenter', () => {
  hiddenIm.style.display = 'inline-block'; 
});

trigge.addEventListener('mouseleave', () => {
  hiddenIm.style.display = 'none';
});


const trigg = document.querySelector('.fashion');
const hiddenI = document.querySelector('.fashions');

trigg.addEventListener('mouseenter', () => {
  hiddenI.style.display = 'inline-block'; 
});

trigg.addEventListener('mouseleave', () => {
  hiddenI.style.display = 'none';
});


const trig = document.querySelector('.collect');
const hidden = document.querySelector('.collects');

trig.addEventListener('mouseenter', () => {
  hidden.style.display = 'inline-block'; 
});

trig.addEventListener('mouseleave', () => {
  hidden.style.display = 'none';
});


const tri = document.querySelector('.sport');
const hidde = document.querySelector('.sports');

tri.addEventListener('mouseenter', () => {
  hidde.style.display = 'inline-block';
});

tri.addEventListener('mouseleave', () => {
  hidde.style.display = 'none';
});


const tr = document.querySelector('.health');
const hidd = document.querySelector('.healths');

tr.addEventListener('mouseenter', () => {
  hidd.style.display = 'inline-block';
});

tr.addEventListener('mouseleave', () => {
  hidd.style.display = 'none';
});


const tre = document.querySelector('.industry');
const hiddi = document.querySelector('.industrys');

tre.addEventListener('mouseenter', () => {
  hiddi.style.display = 'inline-block';
});

tre.addEventListener('mouseleave', () => {
  hiddi.style.display = 'none';
});


const tru = document.querySelector('.home');
const hiddu = document.querySelector('.homes');

tru.addEventListener('mouseenter', () => {
  hiddu.style.display = 'inline-block';
});

tru.addEventListener('mouseleave', () => {
  hiddu.style.display = 'none';
});