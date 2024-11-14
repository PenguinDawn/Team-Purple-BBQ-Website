let is_open = false;
let opened = "";
let open_arrow = "";
let close_arrow = "";


// grand sponsor
const grand_arrow = document.getElementById("grand-arrow");
const grand_upside_arrow = document.getElementById("grand-upside-arrow");
const grand_drop = document.getElementById("grand-drop");

// Blue ribbon
const blue_arrow = document.getElementById("blue-arrow");
const blue_upside_arrow = document.getElementById("blue-upside-arrow");
const blue_drop = document.getElementById("blue-drop");

// Whole Hog
const whole_arrow = document.getElementById("whole-arrow");
const whole_upside_arrow = document.getElementById("whole-upside-arrow");
const whole_drop = document.getElementById("whole-drop");

// Pit Crew
const pit_arrow = document.getElementById("pit-arrow");
const pit_upside_arrow = document.getElementById("pit-upside-arrow");
const pit_drop = document.getElementById("pit-drop");

// Public Eating
const public_arrow = document.getElementById("public-arrow");
const public_upside_arrow = document.getElementById("public-upside-arrow");
const public_drop = document.getElementById("public-drop");

// Swine and Shine
const swine_arrow = document.getElementById("swine-arrow");
const swine_upside_arrow = document.getElementById("swine-upside-arrow");
const swine_drop = document.getElementById("swine-drop");

//Antique Tractor
const antique_arrow = document.getElementById("antique-arrow");
const antique_upside_arrow = document.getElementById("antique-upside-arrow");
const antique_drop = document.getElementById("antique-drop");

// Gameday Tailgate
const gameday_arrow = document.getElementById("gameday-arrow");
const gameday_upside_arrow = document.getElementById("gameday-upside-arrow");
const gameday_drop = document.getElementById("gameday-drop");

// Hog Wild Cornhole
const cornhole_arrow = document.getElementById("cornhole-arrow");
const cornhole_upside_arrow = document.getElementById("cornhole-upside-arrow");
const cornhole_drop = document.getElementById("cornhole-drop");

// Oink n doink Dunking
const dunking_arrow = document.getElementById("dunking-arrow");
const dunking_upside_arrow = document.getElementById("dunking-upside-arrow");
const dunking_drop = document.getElementById("dunking-drop");

// First Respondors
const respondor_arrow = document.getElementById("respondor-arrow");
const respondor_upside_arrow = document.getElementById("respondor-upside-arrow");
const respondor_drop = document.getElementById("respondor-drop");

// Little Pig town
const town_arrow = document.getElementById("town-arrow");
const town_upside_arrow = document.getElementById("town-upside-arrow");
const town_drop = document.getElementById("town-drop");

// Piglet Pen
const pen_arrow = document.getElementById("pen-arrow");
const pen_upside_arrow = document.getElementById("pen-upside-arrow");
const pen_drop = document.getElementById("pen-drop");

// Piglet Splash
const splash_arrow = document.getElementById("splash-arrow");
const splash_upside_arrow = document.getElementById("splash-upside-arrow");
const splash_drop = document.getElementById("splash-drop");

// Porky's Pedal Tractor Pull
const porky_arrow = document.getElementById("porky-arrow");
const porky_upside_arrow = document.getElementById("porky-upside-arrow");
const porky_drop = document.getElementById("porky-drop");

// Princess Tea
const princess_arrow = document.getElementById("princess-arrow");
const princess_upside_arrow = document.getElementById("princess-upside-arrow");
const princess_drop = document.getElementById("princess-drop");

function hide(ele) {
    ele.classList.toggle("hidden");
}

function opener_checker(box, arrow1, arrow2){
    if(is_open) {
        hide(opened);
        hide(open_arrow);
        hide(close_arrow);
    }
    hide(box);
    hide(arrow1);
    hide(arrow2);
    is_open = true;
    opened = box;
    open_arrow = arrow1;
    close_arrow = arrow2;
}

function closer(box, arrow1, arrow2){
    hide(box);
    hide(arrow1);
    hide(arrow2);
    is_open = false;
}


function eventy(thing, arrow1, arrow2) {
    arrow1.addEventListener("click", function () {opener_checker(thing, arrow1, arrow2);});
    arrow2.addEventListener("click", function() {closer(thing, arrow1, arrow2);});
}

eventy(grand_drop, grand_arrow, grand_upside_arrow);
eventy(blue_drop, blue_arrow, blue_upside_arrow);
eventy(whole_drop, whole_arrow, whole_upside_arrow);
eventy(pit_drop, pit_arrow, pit_upside_arrow);

eventy(public_drop, public_arrow, public_upside_arrow);
eventy(swine_drop, swine_arrow, swine_upside_arrow);
eventy(antique_drop, antique_arrow, antique_upside_arrow);
eventy(gameday_drop, gameday_arrow, gameday_upside_arrow);
eventy(cornhole_drop, cornhole_arrow, cornhole_upside_arrow);
eventy(dunking_drop, dunking_arrow, dunking_upside_arrow);
eventy(respondor_drop, respondor_arrow, respondor_upside_arrow);
eventy(town_drop, town_arrow, town_upside_arrow);
eventy(pen_drop, pen_arrow, pen_upside_arrow);
eventy(splash_drop, splash_arrow, splash_upside_arrow);
eventy(porky_drop, porky_arrow, porky_upside_arrow);
eventy(princess_drop, princess_arrow, princess_upside_arrow);

