import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() //allows data being put inside menu from outside this component
  menu: Menu;
  constructor() { }

  ngOnInit() {
  }

}
