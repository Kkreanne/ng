import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';
  myColor: string = "blue";
  name: string = "Karlee Abrams";
  address: string = "3391 State Route 132 Amelia, OH 45102";
  phoneNumber: string = "513.608.1672";
  email: string = "karkar1030@yahoo.com";

  chgColor(color: string): void {
    this.myColor = color;
  }
}
