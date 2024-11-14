let hamburger = document.getElementById("hamburger");
let ham_close = document.getElementById("ham-close");
let overlay = document.querySelector(".overlay");
let navigation = document.querySelector("#navigation");

function showing(){
    overlay.classList.toggle("mobile-hidden");
    navigation.classList.toggle("mobile-hidden");
}

hamburger.addEventListener("click", showing);
ham_close.addEventListener("click", showing);
overlay.addEventListener("click", showing);
