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
  items.slice(0, 2).forEach((item) => {
    const itemHTML = createItemHTML(item);
    recentSearchesContainer.appendChild(itemHTML);
  });

  // Add suggested destinations (next items)
  items.slice(2).forEach((item) => {
    const itemHTML = createItemHTML(item);
    suggestedDestinationsContainer.appendChild(itemHTML);
  });

})
  
  