const today = new Date();
const currentYearElement = document.getElementById("currentYear");

currentYear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;