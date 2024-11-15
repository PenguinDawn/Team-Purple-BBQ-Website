let hamburger = document.getElementById("hamburger");
let ham_close = document.getElementById("ham-close");
let overlay = document.querySelector(".overlay");
let navigation = document.querySelector("#navigation");
let classier = document.getElementById("classier");

function showing(){
    overlay.classList.toggle("mobile-hidden");
    navigation.classList.toggle("mobile-hidden");
    classier.classList.toggle("mobile-hidden");
}

hamburger.addEventListener("click", showing);
ham_close.addEventListener("click", showing);
overlay.addEventListener("click", showing);


// Showing the dropdown


const dropper = document.getElementById("dropper");
const dropped = document.getElementById("dropped");
const over = document.getElementById("outside-clicker");

function hide(){
    dropped.classList.toggle("hidden")
    dropper.classList.toggle("open");
    over.classList.toggle("hidden");
}

dropper.addEventListener("click", hide);
over.addEventListener("click", hide);

