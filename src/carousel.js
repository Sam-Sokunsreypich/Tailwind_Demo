const carousel = document.querySelector("#carousel");
const items = carousel.querySelectorAll("[data-carousel-item]");
const prevButton = carousel.querySelector("[data-carousel-prev]");
const nextButton = carousel.querySelector("[data-carousel-next]");
const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle("hidden", i !== index);
    item.classList.toggle("block", i === index);
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("bg-white", i === index);
    indicator.classList.toggle("bg-gray-300", i !== index);
  });
}

// Show the first slide by default
showSlide(currentIndex);

// Next button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

// Previous button
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

// Indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});
