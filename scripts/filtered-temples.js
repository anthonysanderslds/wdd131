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
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Columbus Ohio",
        location: "Columbus, Ohio",
        dedicated: "1998, September, 12",
        area: 11745,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x225/columbus-temple-lds-897006-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2017, March, 4",
        area: 29966,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/4-5aa85fb6f20a17f629302687710142328a707d4d.jpeg"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "1998, May, 1",
        area: 48100,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
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

    if (event.target.textContent === "Old") {
        filterTemples = temples.filter(temple => {
            return new Date(temple.dedicated).getFullYear() < 1900;
        });
    }
    else if (event.target.textContent === "New") {
        filterTemples = temples.filter(temple => {
            return new Date(temple.dedicated).getFullYear() > 2000;
        });
    }
    else if (event.target.textContent === "Large") {
        filterTemples = temples.filter(temple => {
            return temple.area > 90000;
        });
    }
    else if (event.target.textContent === "Small") {
        filterTemples = temples.filter(temple => {
            return temple.area < 10000;
        });
    }
    else {
        filterTemples = temples;
    }

    displayTemples(filterTemples)
});