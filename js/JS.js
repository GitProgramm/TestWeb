
window.onscroll = function() {myFunction()};
console.log("a");
var navbar = document.getElementById("myNavbar");

var sticky = navbar.offsetTop;

function myFunction() {
  console.log("b");
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
