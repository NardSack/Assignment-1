
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("socialmediacontainer").style.top = "0";
  } else {
    document.getElementById("socialmediacontainer").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}





// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()