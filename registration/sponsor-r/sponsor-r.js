let open = false;
let opened = "";
let open_arrow = "";
let close_arrow = "";


// grand sponsor
const grand_arrow = document.getElementById("grand-arrow");
const grand_upside_arrow = document.getElementById("grand_upside_arrow");
const grand_drop = document.getElementById("grand-drop");

// Blue ribbon
const blue_arrow = document.getElementById("blue-arrow");
const blue_upside_arrow = document.getElementById("blue_upside_arrow");
const blue_drop = document.getElementById("blue-drop");

// Whole Hog
const whole_arrow = document.getElementById("whole-arrow");
const whole_upside_arrow = document.getElementById("whole_upside_arrow");
const whole_drop = document.getElementById("whole-drop");

// Pit Crew
const pit_arrow = document.getElementById("pit-arrow");
const pit_upside_arrow = document.getElementById("pit_upside_arrow");
const pit_drop = document.getElementById("pit-drop");

// Public Eating
const public_arrow = document.getElementById("public-arrow");
const public_upside_arrow = document.getElementById("public_upside_arrow");
const public_drop = document.getElementById("public-drop");

// Swine and Shine
const swine_arrow = document.getElementById("swine-arrow");
const swine_upside_arrow = document.getElementById("swine_upside_arrow");
const swine_drop = document.getElementById("swine-drop");

//Antique Tractor
const antique_arrow = document.getElementById("antique-arrow");
const antique_upside_arrow = document.getElementById("antique_upside_arrow");
const antique_drop = document.getElementById("antique-drop");

// Gameday Tailgate
const gameday_arrow = document.getElementById("gameday-arrow");
const gameday_upside_arrow = document.getElementById("gameday_upside_arrow");
const gameday_drop = document.getElementById("gameday-drop");

// Hog Wild Cornhole
const cornhole_arrow = document.getElementById("cornhole-arrow");
const cornhole_upside_arrow = document.getElementById("cornhole_upside_arrow");
const cornhole_drop = document.getElementById("cornhole-drop");

// Oink n doink Dunking
const dunking_arrow = document.getElementById("dunking-arrow");
const dunking_upside_arrow = document.getElementById("dunking_upside_arrow");
const dunking_drop = document.getElementById("dunking-drop");

// First Respondors
const respondor_arrow = document.getElementById("respondor-arrow");
const respondor_upside_arrow = document.getElementById("respondor_upside_arrow");
const respondor_drop = document.getElementById("respondor-drop");

// Little Pig town
const town_arrow = document.getElementById("town-arrow");
const town_upside_arrow = document.getElementById("town_upside_arrow");
const town_drop = document.getElementById("town-drop");

// Piglet Pen
const pen_arrow = document.getElementById("pen-arrow");
const pen_upside_arrow = document.getElementById("pen_upside_arrow");
const pen_drop = document.getElementById("pen-drop");

// Piglet Splash
const splash_arrow = document.getElementById("splash-arrow");
const splash_upside_arrow = document.getElementById("splash_upside_arrow");
const splash_drop = document.getElementById("splash-drop");

// Porky's Pedal Tractor Pull
const porky_arrow = document.getElementById("porky-arrow");
const porky_upside_arrow = document.getElementById("porky_upside_arrow");
const porky_drop = document.getElementById("porky-drop");

// Princess Tea
const princess_arrow = document.getElementById("princess-arrow");
const princess_upside_arrow = document.getElementById("princess_upside_arrow");
const princess_drop = document.getElementById("princess-drop");

function hide(element) {
    element.classList.toggle("hidden");
}

function opener_checker(box, arrow1, arrow2){
    if(open) {
        hide(opened);
        hide(open_arrow);
        hide(close_arrow);
    }
    opened = box;
    open_arrow = arrow1;
    close_arrow = arrow2;
    hide(box);
    hide(arrow1);
    hide(arrow2);
}

function eventy(thing, arrow1, arrow2) {
    arrow1.addEventListener("click", opener_checker(thing, arrow1, arrow2));
}

eventy(grand_drop, grand_arrow, grand_upside_arrow);
eventy(grand_upside_arrow);
eventy(blue_arrow);
