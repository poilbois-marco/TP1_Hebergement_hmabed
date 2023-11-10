
const button = document.querySelector('button');
const counter = document.querySelector('#counter');

let count = 0;

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  localStorage.setItem('clickCount', count);
});

window.addEventListener('load', () => {
  const clickCount = localStorage.getItem('clickCount');
  if (clickCount) {
    count = parseInt(clickCount);
    counter.textContent = count;
  }
});
