let is_open = false;
let opened = "";
let open_arrow = "";
let close_arrow = "";


// grand sponsor
const grand_arrow = document.getElementById("grand-arrow");
const grand_upside_arrow = document.getElementById("grand-upside-arrow");
const grand_drop = document.getElementById("grand-drop");
const grand_accord = document.getElementById("grand-accord");

// Blue ribbon
const blue_arrow = document.getElementById("blue-arrow");
const blue_upside_arrow = document.getElementById("blue-upside-arrow");
const blue_drop = document.getElementById("blue-drop");
const blue_accord = document.getElementById("blue-accord");

// Whole Hog
const whole_arrow = document.getElementById("whole-arrow");
const whole_upside_arrow = document.getElementById("whole-upside-arrow");
const whole_drop = document.getElementById("whole-drop");
const whole_accord = document.getElementById("whole-accord");

// Pit Crew
const pit_arrow = document.getElementById("pit-arrow");
const pit_upside_arrow = document.getElementById("pit-upside-arrow");
const pit_drop = document.getElementById("pit-drop");
const pit_accord = document.getElementById("pit-accord");

// Public Eating
const public_arrow = document.getElementById("public-arrow");
const public_upside_arrow = document.getElementById("public-upside-arrow");
const public_drop = document.getElementById("public-drop");
const public_accord = document.getElementById("public-accord");

// Swine and Shine
const swine_arrow = document.getElementById("swine-arrow");
const swine_upside_arrow = document.getElementById("swine-upside-arrow");
const swine_drop = document.getElementById("swine-drop");
const swine_accord = document.getElementById("swine-accord");

//Antique Tractor
const antique_arrow = document.getElementById("antique-arrow");
const antique_upside_arrow = document.getElementById("antique-upside-arrow");
const antique_drop = document.getElementById("antique-drop");
const antique_accord = document.getElementById("antique-accord");

// Gameday Tailgate
const gameday_arrow = document.getElementById("gameday-arrow");
const gameday_upside_arrow = document.getElementById("gameday-upside-arrow");
const gameday_drop = document.getElementById("gameday-drop");
const gameday_accord = document.getElementById("gameday-accord");

// Hog Wild Cornhole
const cornhole_arrow = document.getElementById("cornhole-arrow");
const cornhole_upside_arrow = document.getElementById("cornhole-upside-arrow");
const cornhole_drop = document.getElementById("cornhole-drop");
const cornhole_accord = document.getElementById("cornhole-accord");

// Oink n doink Dunking
const dunking_arrow = document.getElementById("dunking-arrow");
const dunking_upside_arrow = document.getElementById("dunking-upside-arrow");
const dunking_drop = document.getElementById("dunking-drop");
const dunking_accord = document.getElementById("dunking-accord");

// First Respondors
const respondor_arrow = document.getElementById("respondor-arrow");
const respondor_upside_arrow = document.getElementById("respondor-upside-arrow");
const respondor_drop = document.getElementById("respondor-drop");
const respondor_accord = document.getElementById("respondor-accord");

// Little Pig town
const town_arrow = document.getElementById("town-arrow");
const town_upside_arrow = document.getElementById("town-upside-arrow");
const town_drop = document.getElementById("town-drop");
const town_accord = document.getElementById("town-accord");

// Piglet Pen
const pen_arrow = document.getElementById("pen-arrow");
const pen_upside_arrow = document.getElementById("pen-upside-arrow");
const pen_drop = document.getElementById("pen-drop");
const pen_accord = document.getElementById("pen-accord");

// Piglet Splash
const splash_arrow = document.getElementById("splash-arrow");
const splash_upside_arrow = document.getElementById("splash-upside-arrow");
const splash_drop = document.getElementById("splash-drop");
const splash_accord = document.getElementById("splash-accord");

// Porky's Pedal Tractor Pull
const porky_arrow = document.getElementById("porky-arrow");
const porky_upside_arrow = document.getElementById("porky-upside-arrow");
const porky_drop = document.getElementById("porky-drop");
const porky_accord = document.getElementById("porky-accord");

// Princess Tea
const princess_arrow = document.getElementById("princess-arrow");
const princess_upside_arrow = document.getElementById("princess-upside-arrow");
const princess_drop = document.getElementById("princess-drop");
const princess_accord = document.getElementById("princess-accord");

function hide(ele) {
    ele.classList.toggle("hidden");
}

function opener_checker(box, arrow1, arrow2){
    if(is_open && opened != box) {
        hide(opened);
        hide(open_arrow);
        hide(close_arrow);
        hide(box);
        hide(arrow1);
        hide(arrow2);
        is_open = true;
        opened = box;
        open_arrow = arrow1;
        close_arrow = arrow2;
    }
    else if (is_open) {
        hide(opened);
        hide(open_arrow);
        hide(close_arrow);
        is_open = false;
    }
    else {
        hide(box);
        hide(arrow1);
        hide(arrow2);
        is_open = true;
        opened = box;
        open_arrow = arrow1;
        close_arrow = arrow2;
    }
}




function eventy(head, box, arrow1, arrow2) {
    head.addEventListener("click", function () {opener_checker(box, arrow1, arrow2);});
}

eventy(grand_accord, grand_drop, grand_arrow, grand_upside_arrow);
eventy(blue_accord, blue_drop, blue_arrow, blue_upside_arrow);
eventy(whole_accord, whole_drop, whole_arrow, whole_upside_arrow);
eventy(pit_accord, pit_drop, pit_arrow, pit_upside_arrow);

eventy(public_accord, public_drop, public_arrow, public_upside_arrow);
eventy(swine_accord, swine_drop, swine_arrow, swine_upside_arrow);
eventy(gameday_accord, gameday_drop, gameday_arrow, gameday_upside_arrow);
eventy(cornhole_accord, cornhole_drop, cornhole_arrow, cornhole_upside_arrow);
eventy(dunking_accord, dunking_drop, dunking_arrow, dunking_upside_arrow);
eventy(respondor_accord, respondor_drop, respondor_arrow, respondor_upside_arrow);
eventy(town_accord, town_drop, town_arrow, town_upside_arrow);
eventy(pen_accord, pen_drop, pen_arrow, pen_upside_arrow);
eventy(splash_accord, splash_drop, splash_arrow, splash_upside_arrow);
eventy(porky_accord, porky_drop, porky_arrow, porky_upside_arrow);
eventy(princess_accord, princess_drop, princess_arrow, princess_upside_arrow);

eventy(antique_accord, antique_drop, antique_arrow, antique_upside_arrow);

