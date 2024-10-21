// Step:1 Add pictures in an array and then set current index of the picture to start from 
    let currentImage = 0;
    const images = ["icons/room.webp", "icons/doja-cat.jpeg"];

// Step:2 Show the left button when the image is not on the 0 index it will show above from it or in simple words it will show when 2nd image is being viewed
  function updateButtons() {
    if (currentImage > 0) {
      document.getElementById("left-button").style.display = "flex";
    } else {
      document.getElementById("left-button").style.display = "none";
    }
  }

// Step:3 Making a function to control the opacity, transition and reappear it with opacity fade effect. Logic used to change image
function nextImage() {
    const imgElement = document.getElementById("image-box");

    // Step3: (1) Removed Opacity effect
    
    imgElement.classList.remove("opacity-100");
    imgElement.classList.add("opacity-0");

    // Step3: (2) Changing the source of image with little bit of timing smoothness.
    setTimeout(() => {
      currentImage = (currentImage + 1) % images.length; // Move to the next image
      imgElement.src = images[currentImage];

    // Step3: (3) Added opacity effect for the new image appeared on clicking the right button.
      imgElement.classList.remove("opacity-0");
      imgElement.classList.add("opacity-100");
      
    // Step3: (4) After these all things done and buttons index value being updated
       updateButtons(); 
    }, 200); 
  }

// Step 4 to make the same function for the left button to go back to previous image 
function previousImage() {
    const imgElement = document.getElementById("image-box");

      // Step4: (1) Removed Opacity effect
    imgElement.classList.remove("opacity-100");
    imgElement.classList.add("opacity-0");

     // Step4: (2) Changing the source of image with little bit of timing smoothness.
    setTimeout(() => {
      currentImage = (currentImage - 1 + images.length) % images.length; // Move to the previous image
      imgElement.src = images[currentImage];

    // Step4: (3) Added opacity effect for the new image appeared on clicking the right button.
      imgElement.classList.remove("opacity-0");
      imgElement.classList.add("opacity-100");

    // Step4: (4) After these all things done and buttons index value being updated  
      updateButtons();
    }, 200); 
  }
  window.onload = updateButtons;
  function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  }
document.addEventListener("DOMContentLoaded", function(){
  const items= [
    {
      id:1,
      title:"Islamabad",
      description:"Any week",
      icon:"bx bx-home"
    },
    {
      id:2,
      title:"Lahore, Pakistan",
      description:"Guests interested in Islamabad also looked here",
      icon:"bx bx-home"
    },
    {
      id:3,
      title:"Istanbul, Türkiye",
      description:"For sights like Galata Tower For sights like Galata Tower",
      icon:"bx bx-home"
    },
    {
      id:4,
      title:"London, United Kingdom",
      description:"For its bustling nightlife",
      icon:"bx bx-home"
    },
    {
      id:5,
      title:"Toronto, Canada",
      description:"For its top-notch dining",
      icon:"bx bx-home"
    },
    {
      id:6,
      title:"Mississauga, Canada",
      description:"For a trip abroad",
      icon:"bx bx-home"
    },
    {
      id:7,
      title:"Rawalpindi, Pakistan",
      description:"Guests interested in Islamabad also looked here",
      icon:"bx bx-home"
    },
    {
      id:8,
      title:"New York City, NY",
      description:"For sights like Central Park",
      icon:"bx bx-home"
    },
    {
      id:9,
      title:"Al Madīnah al Munawwarah, Saudi Arabia",
      description:"For a trip abroad",
      icon:"bx bx-home"
    },
    {
      id:10,
      title:"Bangkok, Thailand",
      description:"For its bustling nightlife",
      icon:"bx bx-home"
    },
    {
      id:11,
      title:"Paris, France",
      description:"For its stunning architecture",
      icon:"bx bx-home"
    },
    {
      id:12,
      title:"Calgary, Canada",
      description:"For nature-lovers",
      icon:"bx bx-home"
    },
    {
      id:13,
      title:"Abu Dhabi, United Arab Emirates",
      description:"Popular beach destination",
      icon:"bx bx-home"
    },
    {
      id:14,
      title:"Antalya Province, Türkiye",
      description:"For sights like Duden Waterfalls",
      icon:"bx bx-home"
    },
    {
      id:15,
      title:"Jeddah, Saudi Arabia",
      description:"For its stunning architecture",
      icon:"bx bx-home"
    },
    {
      id:16,
      title:"Baku, Azerbaijan",
      description:"For a trip abroad",
      icon:"bx bx-home"
    },
    {
      id:17,
      title:"Murree, Pakistan",
      description:"Guests interested in Islamabad also looked here",
      icon:"bx bx-home"
    },
    {
      id:18,
      title:"Rome, Italy",
      description:"For sights like Trevi Fountain",
      icon:"bx bx-home"
    },
    {
      id:19,
      title:"Nathia Gali, Pakistan",
      description:"A short distance from your Islamabad search",
      icon:"bx bx-home"
    },
    {
      id:20,
      title:"Izmir, Türkiye",
      description:"For a trip abroad",
      icon:"bx bx-home"
    },
    {
      id:21,
      title:"Riyadh, Saudi Arabia",
      description:"For sights like National Museum of Saudi Arabia",
      icon:"bx bx-home"
    }
  ]
  const recentSearchesContainer = document.getElementById("recent-searches");
  const suggestedDestinationsContainer = document.getElementById("suggested-destinations");

  // Function to create item HTML
  function createItemHTML(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("context", "flex", "h-18", "p-2", "hover:bg-gray-100", "rounded-lg");

    const svgDiv = document.createElement("div");
    svgDiv.classList.add("svg", "w-12", "flex", "justify-center", "items-center");

    const icon = document.createElement("ion-icon");
    icon.name = item.icon;
    icon.classList.add("text-4xl", "rounded-[10px]", "bg-yellow-100", "p-2", "text-[#666]");
    svgDiv.appendChild(icon);

    const textDiv = document.createElement("div");
    textDiv.classList.add("islamabad", "flex", "flex-col", "pl-2");

    const title = document.createElement("h1");
    title.classList.add("text-[15px]", "text-gray-800", "font-medium");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("text-sm", "font-[400]", "text-gray-500");
    description.textContent = item.description;

    textDiv.appendChild(title);
    textDiv.appendChild(description);

    itemDiv.appendChild(svgDiv);
    itemDiv.appendChild(textDiv);

    return itemDiv;
  }

  // Add recent searches (first 2 items)
  items.slice(0, 1).forEach((item) => {
    const itemHTML = createItemHTML(item);
    recentSearchesContainer.appendChild(itemHTML);
  });

  // Add suggested destinations (next items)
  items.slice(2).forEach((item) => {
    const itemHTML = createItemHTML(item);
    suggestedDestinationsContainer.appendChild(itemHTML);
  });

})
  
function toggleDropdown4() {
  const dropdown = document.getElementById('dropdown4');
  dropdown.classList.toggle('hidden');
}

// Dynamically populate the dropdown after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const dropdownContent = document.getElementById('dropdown4');
  
  const item4 = [
    { id: 'box1', title: 'Adults', description: 'Ages 13 or above' },
    { id: 'box2', title: 'Children', description: 'Ages 2 - 12' },
    { id: 'box3', title: 'Infants', description: 'Under 2' },
    { id: 'box4', title: 'Pets', description: 'Bringing a service animal?' }
  ];

  item4.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex','m-6','border-b-2','pb-6', 'justify-between', 'items-center', );

    const textDiv = document.createElement('div');
    textDiv.innerHTML = `<h2 class="text-gray-700 font-medium">${item.title}</h2>
                         <p class="text-gray-500 text-sm">${item.description}</p>`;

    const counterDiv = document.createElement('div');
    counterDiv.classList.add('flex', 'items-center');
    counterDiv.innerHTML = `
      <button class="bg-gray-200 px-2 py-1 text-gray-600 rounded-full w-8">-</button>
      <span class="px-3 text-gray-700">0</span>
      <button class="bg-gray-200 px-2 py-1 text-gray-600 rounded-full w-8" >+</button>
    `;

    itemDiv.appendChild(textDiv);
    itemDiv.appendChild(counterDiv);

    dropdownContent.appendChild(itemDiv);
  });
});

function toggleDropdown2() {
  const dropdown = document.getElementById('dropdown2');
  dropdown.classList.toggle('hidden');
}
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(li => {
      li.classList.remove('bg-white', 'rounded-full', 'font-semibold', 'shadow', 'px-6');
    });
    
    item.classList.add('bg-white', 'rounded-full', 'font-semibold', 'shadow', 'px-4');
  });
});

function generateCalendar(days, elementId, startDay, disableUntil = 0) {
  const calendar = document.getElementById(elementId);
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  weekdays.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.classList.add('font-medium', 'text-sm', 'text-gray-500', 'text-center');
    calendar.appendChild(dayElement);
  });

  for (let i = 0; i < startDay; i++) {
    const emptyElement = document.createElement('div');
    calendar.appendChild(emptyElement); 
  }

  for (let i = 1; i <= days; i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.classList.add('text-center','text-sm', 'p-2', 'w-10', 'h-10', 'rounded', 'border-2', 'border-transparent');

    if (i <= disableUntil) {
      dayElement.classList.add('text-gray-400');
    } else {
      dayElement.classList.add('bg-white', 'cursor-pointer', 'hover:border-black', 'hover:rounded-full');
    }
    calendar.appendChild(dayElement);
  }
}

generateCalendar(31, 'left-calendar', 2, 17);
generateCalendar(30, 'right-calendar', 5);

function showSection(clickedTab) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));

  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => tab.classList.remove('bg-white', 'shadow', 'font-semibold'));

  document.getElementById(`${clickedTab}-section`).classList.remove('hidden');

  document.getElementById(`${clickedTab}-tab`).classList.add('bg-white', 'shadow', 'font-semibold');
}

const months = [
  {
    id:1,
    title:"October",
    description:"2024",
  },
  {
    id:2,
    title:"November",
    description:"2024",
  },
  {
    id:3,
    title:"December",
    description:"2024",
  },
  {
    id:4,
    title:"January",
    description:"2025",
  },
  {
    id:5,
    title:"February",
    description:"2025",
  },
  {
    id:6,
    title:"March",
    description:"2025",
  },
  {
    id:7,
    title:"April",
    description:"2025",
  },
  {
    id:8,
    title:"May",
    description:"2025",
  },
  {
    id:9,
    title:"June",
    description:"2025",
  },
  {
    id:10,
    title:"July",
    description:"2024",
  },
  {
    id:11,
    title:"August",
    description:"2025",
  },
  {
    id:12,
    title:"September",
    description:"2025",
  },
  
]
document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("container10");
  container.classList.add("flex", "flex-row", "gap-2", "overflow-hidden", "mt-2");

  const visibleMonths = months.slice(0, 6);
  visibleMonths.forEach((month) => {

    const monthBox = document.createElement("div");

    // Add classes for each box
    monthBox.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "border-2",
      "p-2",
      "rounded-[30px]",
      "w-[130px]",
      "h-36",
      "cursor-pointer",
      "hover:border-black"
    );

    // Add the content inside each box
    monthBox.innerHTML = `
      <div class="icon mb-2 font-normal">
        <img src="https://img.icons8.com/material-outlined/48/000000/calendar--v1.png" class="w-8 h-8" />
      </div>
      <h3 class="font-[400] text-center">${month.title}</h3>
      <p class="text-gray-500 text-center">${month.description}</p>
    `;

    // Append the box to the container
    container.appendChild(monthBox);
  });
});

const boxesData = [
  { id: 1, title: "Exact dates"},
  { id: 2, title: "1 day", },
  { id: 3, title: "2 days",},
  { id: 4, title: "3 days",},
  { id: 5, title: "7 days",},
  { id: 6, title: "14 days",}
];

function createBoxes() {
  const container = document.getElementById('boxes-container');

  boxesData.forEach(box => {
    const boxElement = document.createElement('div');
    boxElement.classList.add(
      'w-full',
      'flex',
      'justify-evenly',
      'items-center',
      'flex-row',
      'pl-4'
    );

    boxElement.innerHTML = `
      <h2 class="anytime text-xs border-2 rounded-full font-medium mt-8 w-24 text-center p-2 ">
        ${box.title}
      </h2>
    `;

    container.appendChild(boxElement);
  });
}
createBoxes();

function toggleDropdown(dropdownId) {
  const dropdowns = ['dropdown', 'dropdown2', 'dropdown4'];

  dropdowns.forEach((id) => {
    const dropdown = document.getElementById(id);

    if (id !== dropdownId) {
      dropdown.classList.add('hidden');
    }
  });

  const selectedDropdown = document.getElementById(dropdownId);
  selectedDropdown.classList.toggle('hidden');
}
