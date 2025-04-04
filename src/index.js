// Libs
import wpower from "./libs/wpower/wpower.js";
const {cvm} = wpower;

// Modules
import Phrases from "./modules/phrases.js";

// Components
import home_js from "./modules/screens/home/home.js";
import item_list_js from "./modules/coms/item-list/item-list.js";
import create_screen_js from "./modules/coms/dialogs/create-screen/create-screen.js";
import create_com_js from "./modules/coms/dialogs/create-com/create-com.js";

function _____CORE_____(){}

// Main
async function main(){
    lang.set_phrases(Phrases);
    await cvm.dyn_screens({
        "home": [home_js,"modules/screens/home"]
    });
    await cvm.dyn_coms({        
        "item-list": [item_list_js,"modules/coms/item-list"],
        "create-screen": [create_screen_js,"modules/coms/dialogs/create-screen"],
        "create-com": [create_com_js,"modules/coms/dialogs/create-com"]
    });
    cvm.render_screen("home",{});
}
window.onload = main;
// EOF