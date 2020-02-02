import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-edit',
  templateUrl: '..//actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = 'Actor-Edit';
  submitBtnTitle: string = 'Save';
  actor: Actor = new Actor();
  id: number = 0;

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

  save() {
    this.actorSvc.edit(this.actor).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs != null) {
        console.log("Error editing actor: " + errs);
      }
      this.router.navigateByUrl('/actor/list');
    });
  }

  backClicked() {
    history.back();
  }
}
