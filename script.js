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

