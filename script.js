
let count = 0;

function handleClick() {
  count++;
  console.log(`Button clicked ${count} times`);
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick);
