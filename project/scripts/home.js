// Hamburger menu functionality
const hamburger = document.getElementById('menu');
const navigation = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show');
});

// Dynamic footer year
const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Last modified date
const lastModified = document.getElementById('lastModified');
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}