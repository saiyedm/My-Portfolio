/* variable typing animation script */
var typed = new Typed(".typing",{
    strings:["","Computer Security Major","Web Developer","Web Designer","Software Developer","2nd year Student"],
    typeSpeed:70,
    BackSpeed:50,
    loop:true
})

let menuicon =document.querySelector('#menu-icon');// creating a new menu icon 
let navbar = document.querySelector('.navbar');

menuicon.onclick =() => {// onclick function so when you click, menu icon becomes x to close it and in navbar we are gonna make it active
    menuicon.classList.toggle('bx-x')// its the x icon
    navbar.classList.toggle('active');
}