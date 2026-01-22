const today = new Date();

const currentYearElement = document.getElementById("currentyear");

currentYearElement.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

let temp = 25;
const wspeed = 15;

function calculateWindChill(temp, windSpeed){
    if (temp <= 10 && windSpeed >= 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }
    else {
        return "N/A";
    }
}

let windChill = calculateWindChill(temp, wspeed);

document.getElementById("windchill").innerHTML = `${windChill}`;