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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam-temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc-temple.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple.webp"
    },
    {
        templeName: "Columbus Ohio",
        location: "Columbus, Ohio",
        dedicated: "1998, September, 12",
        area: 11745,
        imageUrl:
            "images/columbus-temple.webp"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2017, March, 4",
        area: 29966,
        imageUrl: "images/rio-de-janeiro-temple.webp"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "1998, May, 1",
        area: 48100,
        imageUrl: "images/brazil-campinas-temple.webp"
    },
];

function displayTemples(templeArray) {

    const templeCards = document.getElementById("temple-cards");

    templeCards.innerHTML = "";

    templeArray.forEach((temple) => {
        const tCard = document.createElement("figure");
        const name = document.createElement("h3");
        name.textContent = temple.templeName;
        tCard.appendChild(name);

        const location = document.createElement("p");
        location.textContent = `LOCATION: ${temple.location}`;
        tCard.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `DEDICATED: ${temple.dedicated}`;
        tCard.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `SIZE: ${temple.area} sq ft`;
        tCard.appendChild(area);

        const image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName + " Temple");
        image.setAttribute("loading", "lazy");
        tCard.appendChild(image);

        templeCards.appendChild(tCard);
    });
}

displayTemples(temples);

const navFilter = document.querySelector("nav");

navFilter.addEventListener("click", (event) => {

    let filterTemples;
    let title = document.querySelector("#title");

    if (event.target.textContent === "Old") {
        filterTemples = temples.filter(temple => {
            return new Date(temple.dedicated).getFullYear() < 1900;
        });
        title.textContent = "Old";
    }
    else if (event.target.textContent === "New") {
        filterTemples = temples.filter(temple => {
            return new Date(temple.dedicated).getFullYear() > 2000;
        });
        title.textContent = "New";
    }
    else if (event.target.textContent === "Large") {
        filterTemples = temples.filter(temple => {
            return temple.area > 90000;
        });
        title.textContent = "Large";
    }
    else if (event.target.textContent === "Small") {
        filterTemples = temples.filter(temple => {
            return temple.area < 10000;
        });
        title.textContent = "Small";
    }
    else {
        filterTemples = temples;
        title.textContent = "Home";
    }

    displayTemples(filterTemples)
});