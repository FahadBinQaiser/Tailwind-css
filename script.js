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
    const dropdown = document.getElementById('primaryDropdown');
    dropdown.classList.toggle('hidden');
  }
document.addEventListener("DOMContentLoaded", function(){
  const items= [
    {
      id:1,
      title:"Islamabad",
      description:"Any week",
      icon:"./icons/islamabad.png"
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
      icon:"./icons/istanbul.png"
    },
    {
      id:4,
      title:"London, United Kingdom",
      description:"For its bustling nightlife",
      icon:"./icons/london.png"
    },
    {
      id:5,
      title:"Toronto, Canada",
      description:"For its top-notch dining",
      icon:"./icons/toronto.png"
    },
    {
      id:6,
      title:"Mississauga, Canada",
      description:"For a trip abroad",
      icon:"./icons/missisauga.png"
    },
    {
      id:7,
      title:"Rawalpindi, Pakistan",
      description:"Guests interested in Islamabad also looked here",
      icon:"./icons/rawalpindi.png"
    },
    {
      id:8,
      title:"New York City, NY",
      description:"For sights like Central Park",
      icon:"./icons/NY.webp"
    },
    {
      id:9,
      title:"Al Madīnah al Munawwarah, Saudi Arabia",
      description:"For a trip abroad",
      icon:"./icons/madinah.webp"
    },
    {
      id:10,
      title:"Bangkok, Thailand",
      description:"For its bustling nightlife",
      icon:"./icons/bangkok.png"
    },
    {
      id:11,
      title:"Paris, France",
      description:"For its stunning architecture",
      icon:"./icons/paris.webp"
    },
    {
      id:12,
      title:"Calgary, Canada",
      description:"For nature-lovers",
      icon:"./icons/calgary.webp"
    },
    {
      id:13,
      title:"Abu Dhabi, United Arab Emirates",
      description:"Popular beach destination",
      icon:"./icons/abudhabi.png"
    },
    {
      id:14,
      title:"Antalya Province, Türkiye",
      description:"For sights like Duden Waterfalls",
      icon:"./icons/antalya.png"
    },
    {
      id:15,
      title:"Jeddah, Saudi Arabia",
      description:"For its stunning architecture",
      icon:"./icons/jeddah.png"
    },
    {
      id:16,
      title:"Baku, Azerbaijan",
      description:"For a trip abroad",
      icon:"./icons/baku.webp"
    },
    {
      id:17,
      title:"Murree, Pakistan",
      description:"Guests interested in Islamabad also looked here",
      icon:"./icons/murree.webp"
    },
    {
      id:18,
      title:"Rome, Italy",
      description:"For sights like Trevi Fountain",
      icon:"./icons/rome.png"
    },
    {
      id:19,
      title:"Nathia Gali, Pakistan",
      description:"A short distance from your Islamabad search",
      icon:"./icons/nathiagali.webp"
    },
    {
      id:20,
      title:"Izmir, Türkiye",
      description:"For a trip abroad",
      icon:"./icons/izmir.png"
    },
    {
      id:21,
      title:"Riyadh, Saudi Arabia",
      description:"For sights like National Museum of Saudi Arabia",
      icon:"./icons/madinah.webp"
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

    let iconElement;
    if (item.icon.includes(".png") || item.icon.includes(".jpg") || item.icon.includes(".jpeg") || item.icon.includes(".webp")) {
      iconElement = document.createElement("img");
      iconElement.src = item.icon;  
      iconElement.alt = item.title;
      iconElement.classList.add("w-12", "h-12", "object-cover");
    } else {
      iconElement = document.createElement("ion-icon");
      iconElement.name = item.icon;
      iconElement.classList.add("text-4xl", "rounded-[10px]", "p-2", "text-[#666]");
    }

    svgDiv.appendChild(iconElement);

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
  const dropdown = document.getElementById('fourthDropdown');
  dropdown.classList.toggle('hidden');
}

// Dynamically populate the dropdown after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const dropdownContent = document.getElementById('fourthDropdown');
  
  const item4 = [
    { id: 'box1', title: 'Adults', description: 'Ages 13 or above', maxCount: 16 },
    { id: 'box2', title: 'Children', description: 'Ages 2 - 12', maxCount: 5 },
    { id: 'box3', title: 'Infants', description: 'Under 2', maxCount: 5 },
    { id: 'box4', title: 'Pets', description: 'Bringing a service animal?', maxCount: 5 }
  ];

  const counts = {};
  // console.log(counts)

  item4.forEach((item) => {
    counts[item.id] = 0;
    // console.log(counts[item.id])

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex','m-6','border-b-2','pb-6', 'justify-between', 'items-center', );

    const textDiv = document.createElement('div');
    textDiv.innerHTML = `<h2 class="text-gray-700 font-medium">${item.title}</h2>
                         <p class="text-gray-500 text-sm">${item.description}</p>`;

    const counterDiv = document.createElement('div');
    counterDiv.classList.add('flex', 'items-center');
    const counterId = `counterDisplay-${item.id}`;
    // console.log(counterId)
    counterDiv.innerHTML = `
      <button class="bg-gray-200 px-2 py-1 text-gray-600 rounded-full w-8" onclick="decrement('${item.id}', ${item.maxCount})">-</button>

      <span class="px-3 text-gray-700" id="${counterId}">0</span>
      <button class="bg-gray-200 px-2 py-1 text-gray-600 rounded-full w-8" onclick="increment('${item.id}', ${item.maxCount})">+</button>
    `;

    itemDiv.appendChild(textDiv);
    itemDiv.appendChild(counterDiv);
    dropdownContent.appendChild(itemDiv);
  });

  window.increment = function(itemId, maxCount) {
    if (counts[itemId] < maxCount) {
      counts[itemId]++;
      updateCounterDisplay(itemId);
    }
  };

  window.decrement = function(itemId, maxCount) {
    if (counts[itemId] > 0) {
      counts[itemId]--;
      updateCounterDisplay(itemId);
    }
  };

  function updateCounterDisplay(itemId) {
    document.getElementById(`counterDisplay-${itemId}`).innerText = counts[itemId];
  }
});

function toggleDropdown2() {
  const dropdown = document.getElementById('secondaryDropdown');
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
    const calendarClasses = ['text-center','text-sm', 'p-2', 'w-10', 'h-10', 'rounded', 'border-2', 'border-transparent'];
    dayElement.classList.add(...calendarClasses)

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
    const monthArray = [
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
    ]
    monthArray.forEach(className => monthBox.classList.add(className));
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
  const dropdowns = ['primaryDropdown', 'secondaryDropdown', 'fourthDropdown'];

  dropdowns.forEach((id) => {
    const dropdown = document.getElementById(id);

    if (id !== dropdownId) {
      dropdown.classList.add('hidden');
    }
  });

  function closeDropdownOnOutsideClick() {
    document.addEventListener("click", function(event2) {      
      if (!selectedDropdown.contains(event2.target) ) {
        selectedDropdown.classList.add('hidden');
      }
    });
    
  }
  closeDropdownOnOutsideClick();
  
  const selectedDropdown = document.getElementById(dropdownId);
  selectedDropdown.classList.toggle('hidden');
}


const dots = document.querySelectorAll('.dot');
const month = document.querySelector('#month-number')

function selectDot(dot){
  const previousSelectedDot = document.querySelector('.dot.bg-white');
      if (previousSelectedDot) {
          previousSelectedDot.classList.remove('bg-white', 'font-semibold', 'text-black', 'outline', 'outline-2', 'shadow-lg');
          previousSelectedDot.classList.add('bg-transparent');
      }
      dot.classList.add('selected', 'bg-white', 'font-semibold', 'text-black', 'outline', 'outline-2', 'shadow-lg');
      dot.classList.remove('bg-transparent' );
      dot.classList.add('bg-white', 'font-semibold', 'text-black',
      'rounded-full','cursor-pointer'
      );
}

const firstDot = document.querySelector('.dot[data-month="1"]');
  selectDot(firstDot);

dots.forEach(dot =>{
  dot.addEventListener("click", function(){
    selectDot(this);
    month.innerHTML = this.dataset.month
  })
})

const searchIcon = document.getElementById("searchIcon");
const Boxes = document.querySelectorAll(".Search");

Boxes.forEach((box, index) => {
  box.addEventListener("click", function(event) {
    event.stopPropagation();
    searchIcon.classList.add("w-20", "h-20", "transition-all", "duration-300", "ease-in-out");
    if (index === 1) {
      searchIcon.classList.add("w-20", "h-20", "transition-all", "duration-300", "ease-in-out");
    }
  });
});
function close(){
  document.addEventListener("click", function(event){
    if(!searchIcon.contains(event.target)){
      searchIcon.classList.remove("w-20","h-20");
      searchIcon.classList.add("w-4","h-4")
    }
    const span = searchIcon.querySelector("span");
    if(span){
      searchIcon.removeChild(span)
    }
  })
}
close()
const components = document.querySelectorAll('.remove');
const headings = document.querySelector(".headingsToRemove");
const container = document.querySelector(".container2");

const changeNames = [
  { element: document.getElementById("changeName1"), text: ["Anywhere", "Where"] },
  { element: document.getElementById("changeName2"), text: ["Any week", "Check In"] },
  { element: document.getElementById("changeName3"), text: ["Add guests", "Who"] },
];

const changeParas = [
  { element: document.getElementById("changePara1"), text: ["", "Search destinations"] },
  { element: document.getElementById("changePara2"), text: ["", "Add dates"] },
  { element: document.getElementById("changePara3"), text: ["", "Add guests"] },
];

const boxStyles = [
  { element: document.getElementById("boxStyles"), classes: ["pr-8", "hover:rounded-full", "hover:bg-none"] },
  { element: document.getElementById("boxStyleSecondary"), classes: ["pl-4", "pr-4", "hover:rounded-full", "hover:bg-none"] },
  { element: document.getElementById("boxStyleTernary"), classes: ["pr-10", "pl-2", "hover:rounded-none", "hover:bg-none"] },
];

const searchBar = document.getElementById("searchBar");
const searchIconSame = document.querySelector(".searchIcon"); 

function handleScroll() {
  const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
  const threshold = 0.2;

  if (scrollPercentage >= threshold) {
    container.classList.add("absolute", "left-[500px]", "top-2");
    headings?.classList.add("hidden");

    boxStyles.forEach(({ element, classes }) => element?.classList.add(...classes));

    changeNames.forEach(({ element, text }) => {
      if (element) element.textContent = text[0];
    });
    changeParas.forEach(({ element }) => {
      if (element) element.textContent = "";
    });

    searchBar?.classList.add("h-12");
    searchIconSame?.classList.add("w-4", "h-4", "absolute", "top-0", "right-2");

    components.forEach(component => {
      component.classList.add('hidden');
      component.classList.remove('flex');
    });
    
  } else {
    container.classList.remove("absolute", "left-[500px]", "top-2");
    headings?.classList.remove("hidden");

    boxStyles.forEach(({ element, classes }) => element?.classList.remove(...classes));

    changeNames.forEach(({ element, text }) => {
      if (element) element.textContent = text[1];
    });
    changeParas.forEach(({ element, text }) => {
      if (element) element.textContent = text[1];
    });

    searchBar?.classList.remove("h-12");
    searchIconSame?.classList.remove("w-4", "h-4", "absolute", "top-0", "right-2");

    components.forEach(component => {
      component.classList.remove('hidden');
      component.classList.add('flex');
    });
  }
}

window.addEventListener('scroll', handleScroll);