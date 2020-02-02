import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = 'Actor-Detail';
  actor: Actor;
  id: number;

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get actor id from url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.actorSvc.get(this.id).subscribe(jRes => {
      this.actor = jRes.data as Actor; //add error checking
    });
  }

  delete() {
    this.actorSvc.delete(this.id).subscribe(jRes => {
      console.log("actor delete jr:", jRes);
      // Sean owes fix here to jRes.  we will assume delete was successful
      if (jRes.errors != null) {
        console.log("Error deleting actor: " + jRes.errors);
      }
      this.router.navigateByUrl("actor/list");
    });
  }
}
