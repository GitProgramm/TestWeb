/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var navbar= document.getElementById("myNavbar");
var sticky = navbar.offsetTop;
function myFunction(){
  if(window.pageYOffset >= sticky){
      navbar.classList.add("sticky");
     
  }else{
      navbar.classList.remove("sticky");
  }
}


