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

const equipment = [
    {
        type: "Shoe Sorter",
        capacity: "15,000 packages per hour",
        automation: "Automated",
        imageUrl: "images/shoe-chutes.webp",
        description: "The shoe sorter is a powerful method of material handling traveling at nearly 500 feet per second. This means that at the average package size MSP8 processes, it can scan over 200 packages per minute!"
    },
    {
        type: "Small Sorter",
        capacity: "6,000 packages per hour",
        automation: "Manual",
        imageUrl: "images/small-sort.webp",
        description: "Small Sort is completely manual consisting of inducting, splitting, and scanning by our associates. Every package is audited for quality prior to being scanned to its destination."
    },
    {
        type: "Amazon Robotics",
        capacity: "17,000 packages per hour",
        automation: "Automated",
        imageUrl: "images/ar-mezz.webp",
        description: "Set to launch later this year, this equipment will replace Small Sort and automate the manual package handling steps in the process. The Robotics equipment will have the capacity to process over 17,000 packages per hour! "
    },
]

DisplayMHE(equipment);

function DisplayMHE(mheArray) {

    const mheCard = document.getElementById("mhe-container");

    mheCard.innerHTML = "";

    mheArray.forEach((mhe) => {
        const flipCard = document.createElement("div");
        flipCard.classList.add("flip-card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");
        flipCard.appendChild(cardInner);

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");

        const mCard = document.createElement("figure");
        const name = document.createElement("h3");
        name.textContent = mhe.type;
        mCard.appendChild(name);

        const capacity = document.createElement("p");
        capacity.textContent = `Capacity: ${mhe.capacity}`;
        mCard.appendChild(capacity);

        const automation = document.createElement("p");
        automation.textContent = `Automation: ${mhe.automation}`;
        mCard.appendChild(automation);

        const image = document.createElement("img");
        image.setAttribute("src", mhe.imageUrl);
        image.setAttribute("alt", mhe.type);
        image.setAttribute("loading", "lazy");
        mCard.appendChild(image);

        cardFront.appendChild(mCard);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");

        const description = document.createElement("p");
        description.textContent = mhe.description;
        cardBack.appendChild(description);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);

        flipCard.appendChild(cardInner);

        flipCard.addEventListener("click", () => {
            flipCard.classList.toggle("flipped");
        });

        mheCard.appendChild(flipCard);

    });
}