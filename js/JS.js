
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("myNavbar");
var nav1 = document.getElementById("myNav");
var a = 0 ;
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    nav1.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    nav1.classList.remove("sticky");
  }
}
