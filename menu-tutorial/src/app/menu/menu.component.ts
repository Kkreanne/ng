import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [                                  //array of menu instances
    new Menu("Home", "/home", "Home Page"),         //only time we will ever use new, only on classes we create
    new Menu("Users", "/users/list", "User List"),
    new Menu("Vendors", "/vendors/list", "Vendor List"),
    new Menu("Products", "/products/list", "Product List"),
    new Menu("Requests", "/requests/list", "List of Requests"),
    new Menu("Review", "/requests/review", "Requests to Review"),
    new Menu("About", "/about", "About the App") //could also add a help page
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
