const hamButton = document.querySelector("#hamburger");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const today = new Date();

const currentYearElement = document.getElementById("currentyear");

currentYearElement.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;