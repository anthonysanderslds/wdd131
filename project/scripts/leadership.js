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

const leadership = [
    {
        name: "Anthony Sanders",
        title: "Site Leader",
        department: "Operations",
        photo: "images/anthony.jpeg",
        level: 1
    },
    {
        name: "ZamZam Abdi",
        title: "HR Business Partner",
        department: "Human Resources",
        photo: "images/zamzam.jpeg",
        level: 1
    },
    {
        name: "Josh Gunderson",
        title: "Operations Manager",
        department: "Operations",
        photo: "images/josh.jpeg",
        level: 2
    },
    {
        name: "Kat Recznik",
        title: "Site Safety Manager",
        department: "Safety",
        photo: "images/kat.jpeg",
        level: 2
    },
    {
        name: "Tu Phung",
        title: "Operations Manager",
        department: "Operations",
        photo: "images/tu.jpeg",
        level: 2
    },
    {
        name: "Garrett Green",
        title: "Dock Operations Manager",
        department: "Operations",
        photo: "images/garrett.jpeg",
        level: 2
    },
    {
        name: "Delaney Gipp",
        title: "Learning Area Manager",
        department: "Learning",
        photo: "images/delaney.jpeg",
        level: 2
    }
];

// Display all leaders initially
DisplayLeader(leadership);

function DisplayLeader(leaderArray) {
    // Select the leadership container
    const leaderCard = document.getElementById("leadership-container");

    // Clear the current leaderCard
    leaderCard.innerHTML = "";

    // For loop to create figure elements
    leaderArray.forEach((leader) => {
        const lCard = document.createElement("figure");

        if (leader.level === 1) {
            lCard.classList.add("peer-leader");
        }
        else if (leader.level === 2) {
            lCard.classList.add("direct-report");
        }

        if (leader.department === "Operations"){
            lCard.classList.add("dept-operations");
        }
        else if (leader.department === "Safety"){
            lCard.classList.add("dept-safety");
        }
        else if (leader.department === "Human Resources"){
            lCard.classList.add("dept-hr");
        }
        else{
            lCard.classList.add("dept-learning");
        }

        const photo = document.createElement("img");
        photo.setAttribute("src", leader.photo);
        photo.setAttribute("alt", leader.name);
        photo.setAttribute("loading", "lazy");
        lCard.appendChild(photo);

        const name = document.createElement("h3");
        name.textContent = leader.name;
        lCard.appendChild(name);

        const title = document.createElement("p");
        title.textContent = leader.title;
        lCard.appendChild(title);

        const dept = document.createElement("p");
        dept.textContent = leader.department;
        lCard.appendChild(dept);

        leaderCard.appendChild(lCard);
    });
}

// Select the filter container
const filterContainer = document.querySelector('.filters');

// Add event listener using delegation
filterContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Remove active class from all buttons
        const allButtons = filterContainer.querySelectorAll('button');
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        event.target.classList.add('active');

        // Get the button ID to determine which department to filter
        const buttonId = event.target.id;

        // Filter the leadership array based on button clicked
        let filteredLeaders;

        if (buttonId === 'all') {
            // Show all leaders
            filteredLeaders = leadership;
        } else if (buttonId === 'operations') {
            filteredLeaders = leadership.filter(leader => leader.department === 'Operations');
        } else if (buttonId === 'hr') {
            filteredLeaders = leadership.filter(leader => leader.department === 'Human Resources');
        } else if (buttonId === 'learning') {
            filteredLeaders = leadership.filter(leader => leader.department === 'Learning');
        }

        // Display the filtered leaders using your existing function
        DisplayLeader(filteredLeaders);
    }
});

