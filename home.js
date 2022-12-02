
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("socialmediacontainer").style.top = "0";
  } else {
    document.getElementById("socialmediacontainer").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

// slide show

var slideIndex = 0;
showSlides();
var slides

function showSlides() {
  let i;
  slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(position) {
  slideIndex +=position;
  if (slideIndex> slides.length) 
  {slideIndex = 1}
  else if(slideIndex<1)
  {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}





var menuBtn = document.getElementById("menubutton")
var setting = document.getElementById("setting")
var menu = document.getElementById("menu")

setting.style.top ="-1000px";

menuBtn.onclick = function(){
    if(setting.style.top =="-1000px"){
      setting.style.top= "0";
    }
    else{
      setting.style.top ="-1000px";
    }
}