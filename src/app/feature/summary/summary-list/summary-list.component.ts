import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/model/summary.class';
import { SummaryService } from 'src/app/service/summary.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {
  summarys: Summary[];
  title: string = "Summary of Movie";

  constructor(private summarySvc: SummaryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.summarySvc.list().subscribe(
      jRes => {
        this.summarys = jRes.data as Summary[];
        console.log(this.summarys);
      }
    );
  }
}
