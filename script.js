// Function to save data to localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve data from localStorage
function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// Function to toggle theme
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
  document.body.classList.toggle('dark-theme');
  saveToLocalStorage('theme', currentTheme);
}

// Function to animate the image
function animateImage() {
  const image = document.getElementById('animatedImage');
  image.classList.add('animate');
  setTimeout(() => {
    image.classList.remove('animate');
  }, 500); // Match the CSS animation duration
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme on page load
  const savedTheme = getFromLocalStorage('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Add event listener to the button
  const themeButton = document.getElementById('themeButton');
  themeButton.addEventListener('click', () => {
    toggleTheme();
    animateImage();
  });
});