const headers = document.querySelectorAll(".card-collapsed");
let opened_head = "";
let open = false;

headers.forEach(header => {
    header.addEventListener("click", () => {

        if(header.classList.contains("active")) {
            open = false;
        } 
        else if (open == true) {
            opener = document.querySelector(".active")
            opener.querySelector(".arrow").classList.toggle("rotated");
            opener.nextElementSibling.classList.toggle("hidden");
            opener.classList.toggle("active");
        }
        else {
            open = true;
        }
        


        header.querySelector('.arrow').classList.toggle("rotated");
        header.nextElementSibling.classList.toggle("hidden");
        header.classList.toggle("active");
    })});

