export class Menu {
    display: string; //what user will see in the menu
    route: string; 
    tip: string; //tooltip for hovering over a menu item

    constructor(display: string, route: string, tip: string) {
        this.display = display;
        this.route = route;
        this.tip = tip;
    }
}