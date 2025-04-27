const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

const cardWrapper = document.querySelector(".card-wrapper");
const cards = document.querySelectorAll(".card");
let slideIndex = 0;

// Clone the cards to create infinite loop effect
cards.forEach(card => {
  const clone = card.cloneNode(true);
  cardWrapper.appendChild(clone);
});

// Function to move slides
function moveSlide() {
  slideIndex++;
  
  const cardWidth = cards[0].offsetWidth;
  const screenWidth = window.innerWidth;

  let slidesToShow = 3;
  if (screenWidth <= 480) {
    slidesToShow = 1;
  } else if (screenWidth <= 768) {
    slidesToShow = 2;
  }

  const moveX = -(cardWidth + 30) * slideIndex; // 30 = space between cards
  cardWrapper.style.transition = "transform 0.5s ease-in-out";
  cardWrapper.style.transform = `translateX(${moveX}px)`;

  if (slideIndex >= cards.length) {
    setTimeout(() => {
      cardWrapper.style.transition = "none";
      cardWrapper.style.transform = `translateX(0px)`;
      slideIndex = 0;
    }, 500); // Wait for animation to complete
  }
}

// Move every 3 seconds
setInterval(moveSlide, 3000);

// Responsive update on resize
window.addEventListener("resize", () => {
  cardWrapper.style.transition = "none";
  cardWrapper.style.transform = `translateX(0px)`;
  slideIndex = 0;
});
