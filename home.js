
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
// var menu = document.getElementById("menu")

setting.style.top ="-1000px";

menuBtn.onclick = function(){
    if(setting.style.top =="-1000px"){
      setting.style.top= "0";
    }
    else{
      setting.style.top ="-1000px";
    }
}
var login = document.getElementById("account")
var loginpage = document.getElementById("loginpage")
var back =document.getElementById("back")
loginpage.style.left = "-100%"

login.onclick = function() {
  if(loginpage.style.left =="-100%"){
    loginpage.style.left= "0";
  }
  else{
    loginpage.style.left ="-100%";
   }
}
back.onclick = function() {
  if(loginpage.style.left =="-100%"){
    loginpage.style.left= "0";
  }
  else{
    loginpage.style.left ="-100%";
   }
}
var validpage = document.getElementById("arebot")
var checkpass = document.getElementById("checkpass")
var checkvali = document.getElementById("checkvali")
validpage.style.right = "-100%"
var submit = document.getElementById("submit")

let mess = document.createElement("div")
mess.classList.add('error')
mess.innerHTML="Error Wrong input try again"


submit.onclick= function(){
  
  var email = document.getElementById("email").value;
  var name = document.getElementById("username").value;
  var phone = document.getElementById("phone").value;
  var password =document.getElementById("password").value;
  if(email != '' &&name !=''&&phone!=''&&password!=''){
  console.log("hello!!," +email+name+phone+password);
  let ndiv = document.createElement("div")
  ndiv.classList.add("changes")
  ndiv.innerHTML = "Username: "+ name + "<br>Email: "+email+"<br>Phone: "+phone;
  let sub = document.createElement("div")
  sub.appendChild(ndiv)
  document.getElementById("change").innerHTML = sub.innerHTML;
  if(loginpage.style.left =="-100%"){
    loginpage.style.left= "0";
  }
  else{
    loginpage.style.left ="-100%";
   }
if(validpage.style.right =="-100%"){
  validpage.style.right= "0";
}
else{
  validpage.style.right ="-100%";
   }}
else{
  document.getElementById("err").innerHTML="make sure to enter all the inputs with the correct details"
}
}

checkvali.onclick=function(){
  
  if (checkpass.value == '5625')
  
    {
      console.log('yayy')
      if(validpage.style.right =="-100%"){
      validpage.style.right= "0";
    }
    else{
      validpage.style.right ="-100%";
       }
    }
  else{
    document.getElementById("errormess").innerHTML = mess.innerHTML
  }
}




