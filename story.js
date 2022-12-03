var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("socialmediacontainer").style.top = "0";
  } else {
    document.getElementById("socialmediacontainer").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
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


// audio volume control
document.getElementById('episode 10').volume = 0.2 ;
document.getElementById('episode 11').volume = 0.2 ;
document.getElementById('episode 12').volume = 0.2 ;
  
