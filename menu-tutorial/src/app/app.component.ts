import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu-tutorial';

  customers: any[] = [];

  constructor(
    private custsvc: CustomerService
  ) {}
  
  sortColumn: string = "id";
  ascOrder: boolean = true;

  sort(column: string): void {
    //passing in the column to sort by, true or false
    if(this.sortColumn === column) {
      this.ascOrder = !this.ascOrder; //flips it, if its false makes it true and vise versa
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }

  ngOnInit() {
    let cust = { id: 4, name: "Target", state: "MN", majorAcct: true };
    this.custsvc.create(cust).subscribe(
      res => { 
        if(res == true) {                   //use for login in capstone
          this.custsvc.list().subscribe(
            res => { 
              this.customers = res; 
              console.log(res);
            }    //display the list but only after the create is done
          )
        }
      }
    );
  }
}
