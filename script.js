// Variables
let slideshow = document.querySelector(".jsSlideshow");
let prevButton = document.querySelector(".jsPrevButton");
let nextButton = document.querySelector(".jsNextButton");
let slideText = document.querySelector(".jsSlideText");

// Data
let slides = [
  {
    name: "image-1",
    src: "./images/img-1.jpeg",
    text: "Slide 1 text",
  },
  {
    name: "image-2",
    src: "./images/img-2.jpeg",
    text: "Slide 2 text",
  },
  {
    name: "image-3",
    src: "./images/person-1.jpeg",
    text: "slide 3 text",
  },
];

// ----- METHOD 1 -----
// Declare initial image as 0
// let initialImage = 0;

// Sets the slideshow background to equal the index initial image index of slides array
// function setImage() {
//   slideshow.style.background = `url(${slides[initialImage].src}) no-repeat center center / cover`;
// }

// Call setImage initially to load first image
// setImage();

// InitialImage increments and runs setImage function - changing the background to next image and appropriately altering the display buttons
// nextButton.addEventListener("click", () => {
//   initialImage++;
//   setImage();
//   prevNextButtonHide();
// });

// InitialImage decrements and runs setImage function - changing the background to previous image and appropriately altering the display buttons
// prevButton.addEventListener("click", () => {
//   initialImage--;
//   setImage();
//   prevNextButtonHide();
// });

// If first image is shown - hide prev button. If last image is shown - hide next button.
// function prevNextButtonHide() {
//   initialImage >= 1
//     ? prevButton.classList.remove("hide")
//     : prevButton.classList.add("hide");

//   initialImage === slides.length - 1
//     ? nextButton.classList.add("hide")
//     : nextButton.classList.remove("hide");
// }

// ----- METHOD 2 -----
// Declare initial image as 0
let initialImage = 0;

// Remove hide class set default for method 1
prevButton.classList.remove("hide");

// Sets the slideshow background to equal the index initial image index of slides array
function setImage() {
  slideshow.style.background = `url(${slides[initialImage].src}) no-repeat center center / cover`;
  // Add text data onto slide
  slideText.textContent = slides[initialImage].text;
}

// Call setImage initially to load first image
setImage();

// InitialImage increments and runs setImage function - changing the background to next image and appropriately altering the display buttons
nextButton.addEventListener("click", () => {
  initialImage++;
  if (initialImage === slides.length) {
    initialImage = 0;
  }
  setImage();
});

// InitialImage decrements and runs setImage function - changing the background to previous image and appropriately altering the display buttons
prevButton.addEventListener("click", () => {
  initialImage--;
  if (initialImage < 0) {
    initialImage = slides.length - 1;
  }
  setImage();
});
