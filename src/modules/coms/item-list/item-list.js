// Libs
import wpower from "../../../libs/wpower/wpower.js";
const {ut,ui,cvm,base_controller,files} = wpower;

// Modules
import utils from "../../utils.js";

// Menu
import edit_ctx_menu from "../../menus/edit-ctx-menu.js";
cvm.reg_menu("edit-ctx-menu",edit_ctx_menu);

import edit_module_menu from "../../menus/edit-module-menu.js";
cvm.reg_menu("edit-module-menu",edit_module_menu);

import edit_menu_menu from "../../menus/edit-menu-menu.js";
cvm.reg_menu("edit-menu-menu",edit_menu_menu);

//
class item_list extends base_controller{
    // 
    constructor(){
        super();
    }

    _____UI_ACTIONS_____(){}

    // 
    add_resource(Ev){
        ui.alert(`Open project dir → src to add resources, 
            app root dir is at src without root slash`);
    }

    // 
    edit_global_html(Ev){
        cvm.get_screen("home").edit_global_html();
    }

    // 
    edit_global_css(Ev){
        cvm.get_screen("home").edit_global_css();
    }

    // 
    add_module(){
        cvm.get_screen("home").add_module();
    }

    // 
    edit_module(Ev){
        cvm.get_screen("home").edit_module();
    }

    // 
    del_module(Ev){
        ui.alert("Go to project dir → src/modules to remove");
    }

    // 
    add_menu(){
        cvm.get_screen("home").add_menu();
    }

    // 
    edit_menu(Ev){
        cvm.get_screen("home").edit_menu();
    }

    // 
    del_menu(Ev){
        ui.alert("Go to project dir → src/modules/menus to remove");
    }

    //
    async edit_js(Ev){
        var Ele  = Ev.target;
        var Type = Ele.attr("type");
        var Name = Ele.attr("name");

        // Load js file
        var Dir = cvm.get_screen("home").Proj_Dir;

        if (Type=="screen"){
            let File = await files.dir_path2file(Dir,`src/modules/screens/${Name}/${Name}.js`);
            var [Handle,Js] = await files.read_file(File);
        }
        else{
            let File = await files.dir_path2file(Dir,`src/modules/coms/${Name}/${Name}.js`);
            var [Handle,Js] = await files.read_file(File);
        }

        // Get methods from abstract syntax tree
        var Methods = utils.get_methods(Js);        

        // Show editor
        var Home = cvm.get_screen("home");
        Home.Cur_Js_Type = Type;
        Home.Cur_Js_File = Name;
        Home.show_js_methods(Methods);
    }

    //
    launch_comvise(Ev){
        window.open("https://comvise.github.io");
    }

    _____CORE_____(){}

    // Init
    init(){
        super.init(this);
        touch(this.Data,"Proj_Name");
        touch(this.Data,"Screens",[]);
        touch(this.Data,"Components",[]);
    }

    // 
    render(){
    }

    //
    async load_data(){
    }
}

export default item_list;
// EOF