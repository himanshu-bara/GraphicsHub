// Sample designer data with photos
const designersData = [
    {
        name: "Himanshu",
        // name:"I'm passionate about helping my clients reach their goals using Illustrator to make their projects shine.",
        specialty: "Web Design",
        works: ["Work 1", "Work 2"],
        price: "$50/hour",
        photo: "1.jpg" // Sample image URL
    },
    {
        name: "Aishwarya",
        specialty: "Graphic Design",
        works: ["Work 3", "Work 4"],
        price: "$60/hour",
        photo: "2.jpg" // Sample image URL
    },
    {
        name: "Scarlet Witch",
        specialty: "UI/UX Design",
        works: ["Work 5", "Work 6"],
        price: "$55/hour",
        photo: "3.jpg" // Sample image URL
    },
    {
        name: "Venom",
        specialty: "Logo Design",
        works: ["Work 7", "Work 8"],
        price: "$70/hour",
        photo: "4.jpg" // Sample image URL
    },
    {
        name: "RDJ Iron Man",
        specialty: "Illustration",
        works: ["Work 9", "Work 10"],
        price: "$65/hour",
        photo: "5.jpg" // Sample image URL
    },
    {
        name: "Random23",
        specialty: "Motion Graphics",
        works: ["Work 11", "Work 12"],
        price: "$75/hour",
        photo: "6.jpg" // Sample image URL
    },
    {
        name: "Assistant",
        specialty: "Package Design",
        works: ["Work 13", "Work 14"],
        price: "$80/hour",
        photo: "7.jpg" // Sample image URL
    },
    {
        name: "Relockar",
        specialty: "Branding",
        works: ["Work 15", "Work 16"],
        price: "$90/hour",
        photo: "8.jpg" // Sample image URL
    },
    {
        name: "Himanshu",
        specialty: "Web Design",
        works: ["Work 1", "Work 2"],
        price: "$50/hour",
        photo: "1.jpg" // Sample image URL
    },
    {
        name: "Aishwarya",
        specialty: "Graphic Design",
        works: ["Work 3", "Work 4"],
        price: "$60/hour",
        photo: "2.jpg" // Sample image URL
    },
    {
        name: "Scarlet Witch",
        specialty: "UI/UX Design",
        works: ["Work 5", "Work 6"],
        price: "$55/hour",
        photo: "3.jpg" // Sample image URL
    },
    {
        name: "Venom",
        specialty: "Logo Design",
        works: ["Work 7", "Work 8"],
        price: "$70/hour",
        photo: "4.jpg" // Sample image URL
    },
    {
        name: "RDJ Iron Man",
        specialty: "Illustration",
        works: ["Work 9", "Work 10"],
        price: "$65/hour",
        photo: "5.jpg" // Sample image URL
    },
    {
        name: "Random23",
        specialty: "Motion Graphics",
        works: ["Work 11", "Work 12"],
        price: "$75/hour",
        photo: "6.jpg" // Sample image URL
    },
    {
        name: "Assistant",
        specialty: "Package Design",
        works: ["Work 13", "Work 14"],
        price: "$80/hour",
        photo: "7.jpg" // Sample image URL
    },
    {
        name: "Relockar",
        specialty: "Branding",
        works: ["Work 15", "Work 16"],
        price: "$90/hour",
        photo: "8.jpg" // Sample image URL
    },
    {
        name: "Himanshu",
        specialty: "Web Design",
        works: ["Work 1", "Work 2"],
        price: "$50/hour",
        photo: "1.jpg" // Sample image URL
    },
    {
        name: "Aishwarya",
        specialty: "Graphic Design",
        works: ["Work 3", "Work 4"],
        price: "$60/hour",
        photo: "2.jpg" // Sample image URL
    },
    {
        name: "Scarlet Witch",
        specialty: "UI/UX Design",
        works: ["Work 5", "Work 6"],
        price: "$55/hour",
        photo: "3.jpg" // Sample image URL
    },
    {
        name: "Venom",
        specialty: "Logo Design",
        works: ["Work 7", "Work 8"],
        price: "$70/hour",
        photo: "4.jpg" // Sample image URL
    },
    {
        name: "RDJ Iron Man",
        specialty: "Illustration",
        works: ["Work 9", "Work 10"],
        price: "$65/hour",
        photo: "5.jpg" // Sample image URL
    },
    {
        name: "Random23",
        specialty: "Motion Graphics",
        works: ["Work 11", "Work 12"],
        price: "$75/hour",
        photo: "6.jpg" // Sample image URL
    },
    {
        name: "Assistant",
        specialty: "Package Design",
        works: ["Work 13", "Work 14"],
        price: "$80/hour",
        photo: "7.jpg" // Sample image URL
    },
    {
        name: "Relockar",
        specialty: "Branding",
        works: ["Work 15", "Work 16"],
        price: "$90/hour",
        photo: "8.jpg" // Sample image URL
    },
    // Add more designer data as needed
];

// Track hired and saved designers
let hiredDesigners = [];
let savedDesigners = [];

function createDesignerCard(designer) {
    const designersSection = document.getElementById("designers");

    const card = document.createElement("div");
    card.classList.add("designer-card");

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("designer-photo");
    photoDiv.style.backgroundImage = `url(${designer.photo})`;

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = designer.name;

    const specialtyPara = document.createElement("p");
    specialtyPara.textContent = `Specialty: ${designer.specialty}`;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Price: ${designer.price}`;

    const hireButton = document.createElement("button");
    hireButton.textContent = "Hire";
    hireButton.addEventListener("click", function () {
        openModal(designer, 'hired');
    });

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Profile";
    saveButton.addEventListener("click", function () {
        openModal(designer, 'saved');
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(hireButton);
    buttonContainer.appendChild(document.createTextNode("\u00A0")); // Non-breaking space
    buttonContainer.appendChild(saveButton);

    card.appendChild(photoDiv);
    card.appendChild(nameHeading);
    card.appendChild(specialtyPara);
    card.appendChild(pricePara);
    card.appendChild(buttonContainer);

    designersSection.appendChild(card);
}

// Function to initialize designer cards
function initializeDesigners() {
    designersData.forEach(createDesignerCard);
}

// Call the initialization function
initializeDesigners();

// Function to filter designers based on specialty
function filterDesigners() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const designersSection = document.getElementById("designers");
    const designerCards = designersSection.getElementsByClassName("designer-card");

    for (const card of designerCards) {
        const specialty = card.querySelector("p").textContent.toLowerCase();
        const isMatch = specialty.includes(searchInput);

        if (isMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function openModal(designer, action) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalSpecialty = document.getElementById("modal-specialty");
    const modalWorks = document.getElementById("modal-works");
    const modalPhoto = document.getElementById("modal-photo");

    const pastWorks = ['Project A', 'Project B', 'Project C'];

    modalTitle.textContent = designer.name;
    modalSpecialty.textContent = `Specialty: ${designer.specialty}`;
    modalWorks.innerHTML = pastWorks.map(work => `<li>${work}</li>`).join('');
    modalPhoto.style.backgroundImage = `url(${designer.photo})`;

    
    modal.style.display = 'block';

    // Display past works and experiences
    const worksList = designer.works.map(work => {
        const li = document.createElement("li");
        li.textContent = work;
        return li;
    });

    worksList.forEach(work => modalWorks.appendChild(work));

    // Change button functionality based on action
    const hireButton = document.querySelector(".modal-content button:nth-child(2)");
    hireButton.onclick = function () {
        if (action === 'hired') {
            hireDesigner(designer);
        } else if (action === 'saved') {
            saveDesigner(designer);
        }
    };

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


// function hireDesigner(designer) {
//     hiredDesigners.push(designer.name);
//     updateList('hired');
//     closeModal();
// }
function hireDesigner() {
    const modalTitle = document.getElementById('modal-title').textContent;
    const modalSpecialty = document.getElementById('modal-specialty').textContent;

    const hiredList = document.getElementById('hired-list');

    // Check if the designer is already hired
    if ([...hiredList.children].some(item => item.textContent === `${modalTitle} - ${modalSpecialty}`)) {
        alert(`${modalTitle} is already hired!`);
        closeModal();
        return;
    }
    // Create a new list item for the hired designer
    const listItem = document.createElement('li');
    listItem.textContent = `${modalTitle} - ${modalSpecialty}`;

    // Add the designer to the hired section
    hiredList.appendChild(listItem);

    // You can add additional logic here, such as updating a database or performing other actions

    // Display the modal after hiring
    closeModal();
}

// Display designers when the page loads
window.onload = displayDesigners;
// function saveDesigner(designer) {
//     savedDesigners.push(designer.name);
//     updateList('saved');
//     closeModal();
// }
function saveDesignerModal() {
    const modalTitle = document.getElementById('modal-title').textContent;
    const modalSpecialty = document.getElementById('modal-specialty').textContent;

    const savedList = document.getElementById('saved-list');

    // Check if the designer is already saved
    if ([...savedList.children].some(item => item.textContent === `${modalTitle} - ${modalSpecialty}`)) {
        alert(`${modalTitle}'s profile is already saved!`);
        closeModal();
        return;
    }
     // Create a new list item for the saved designer
     const listItem = document.createElement('li');
     listItem.textContent = `${modalTitle} - ${modalSpecialty}`;
     listItem.classList.add('saved-designer');
 
     // Add the designer to the saved list
     savedList.appendChild(listItem);
 
     // You can add additional logic here, such as updating a database or performing other actions
 
     alert(`${modalTitle}'s profile saved! (Functionality to be implemented)`);
 
     // Close the modal after saving
     closeModal();
 }

function updateList(type) {
    const listContainer = document.getElementById(`${type}-list`);
    const list = type === 'hired' ? hiredDesigners : savedDesigners;

    // Clear previous list
    listContainer.innerHTML = "";

    // Display updated list
    list.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        listContainer.appendChild(li);
    });
}


