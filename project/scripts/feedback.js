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

let feedbackCount = Number(localStorage.getItem("feedbackCount")) || 0;

feedbackCount++;

localStorage.setItem("feedbackCount",feedbackCount);

document.querySelector("#feedbackCount").textContent = feedbackCount;