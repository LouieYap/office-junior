
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className +=" responsive";
  } else {
    x.className = "topnav";
  }
}

function categoryFunction() {
  var y = document.getElementsByClassName("category");
   if (y[0].className === "category") {
    y[0].className +=" category-display";
  } else {
    y[0].className = "category";
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

// Categories
var parent_category = document.getElementsByClassName("category-caret");
var i;
for (i = 0; i < parent_category.length; i++) {
  parent_category[i].addEventListener("click", function() {


    var dropdownContent = $(this).parent().next()[0];
    dropdownContent.classList.toggle("sub-categories-display");
    if ($(this).children().hasClass('fa-caret-down')) {
      $(this).children().removeClass('fa-caret-down').addClass('fa-caret-up');
    } else {
      $(this).children().removeClass('fa-caret-up').addClass('fa-caret-down');
    }
  });
}




//ajax
$(document)
  .ajaxStart(function () {
    $("#loading").show();
  })
  .ajaxStop(function () {
    $("#loading").hide();
  });

$(document).ready(function(){

  $(".office-chairs-category").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("office-chairs.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });


  $(".office-tables-category").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("office-tables.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });


  $(".executive-tables").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("executive-tables.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });


  $(".meeting-tables").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("meeting-tables.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });



  $(".clerical-tables").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("clerical-tables.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });

  $(".multiple-tables").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("multiple-tables.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });

  $(".cabinets").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("cabinets.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });

  $(".workstations").click(function(){
    $(".container2").animate({opacity: 0}, 50, 'linear', function(){
      $(".container2").load("workstations.html", function(responseTxt, statusTxt, jqXHR){
        if(statusTxt == "success"){
                 $(".container2").animate({opacity: 1});
        }
    });
  });
  });
});
