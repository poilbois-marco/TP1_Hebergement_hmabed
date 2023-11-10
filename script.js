
// Get the button element from the HTML document
const button = document.querySelector('button');

// Initialize the click count to 0
let clickCount = 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Increment the click count
  clickCount++;

  // Log the click count to the console
  console.log(`Button clicked ${clickCount} times`);

  // Save the click count to local storage
  localStorage.setItem('clickCount', clickCount);
});

// Retrieve the click count from local storage on page load
clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Log the initial click count to the console
console.log(`Button clicked ${clickCount} times`);
