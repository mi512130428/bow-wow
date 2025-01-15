const hamburgerMenu = document.querySelector(".hamburger_btn");
const hamburgerMask = document.querySelector(".hamburger-mask");
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("toggle");
  hamburgerMask.classList.toggle("toggle");
});

window.addEventListener("scroll", function () {
  const paws = document.querySelector(".paws");
  const pawsTop = paws.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (pawsTop - windowHeight <= 0) {
    paws.classList.add("move");
  }
  const dog = document.querySelector(".dog");
  const dogTop = dog.getBoundingClientRect().top;
  
  if(dogTop - windowHeight <= 0) {
    dog.classList.add("move");
  }
});
window.addEventListener("scroll", function () {
  const dog = document.querySelector(".dog");
  const dogTop = dog.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if(dogTop - windowHeight <= 0) {
    dog.classList.add("move");
  }
});
