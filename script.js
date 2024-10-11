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

