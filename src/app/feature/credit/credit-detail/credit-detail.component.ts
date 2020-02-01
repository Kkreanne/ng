import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service ';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title: string = 'Credit-Detail';
  credit: Credit;
  id: number;

  constructor(private creditSvc: CreditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //get credit id from url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.creditSvc.get(this.id).subscribe(jRes => {
      this.credit = jRes.data as Credit; //add error checking
    });
  }

  delete() {
    this.creditSvc.delete(this.id).subscribe(jRes => {
      console.log("credit delete jr:",jRes);
      // Sean owes fix here to jRes.  we will assume delete was successful
      if (jRes.errors != null) {
        console.log("Error deleting credit: "+jRes.errors);
      }
      this.router.navigateByUrl("credit/list");
    });
  }
}
