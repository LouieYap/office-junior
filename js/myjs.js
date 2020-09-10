
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className +=" responsive";
  } else {
    x.className = "topnav";
  }
}

const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

// Categories js
var caretDivs = document.getElementsByClassName("category-caret");
var i;
for (i = 0; i < caretDivs.length; i++) {
  caretDivs[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}




//ajax

$(document).ready(function(){
  $(".category-link").click(function(){
    $(".container2").animate({opacity: 0}, 100, 'linear', function(){
      $(".container2").load("office-chairs.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });

  $(".cabinet-link").click(function(){
    $(".container2").animate({opacity: 0}, 100, 'linear', function(){
      $(".container2").load("office-cabinets.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });
});
