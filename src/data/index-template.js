export default 
`import wpower from "./libs/wpower/wpower.js";
const {cvm} = wpower;

// Screens and components
import home_js from "./modules/screens/home/home.js";
#IMPORT_SCREENS
#IMPORT_COMS

// Main
async function main(){
    await cvm.dyn_screens({
        home: [home_js,"modules/screens/home"],
        #SCREEN_LIST
    });
    await cvm.dyn_coms({
        #COM_LIST
    });
    cvm.render_screen("home",{});
}
window.onload = main;`;
// EOF