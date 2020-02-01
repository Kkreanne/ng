import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service ';
import { ActorService } from 'src/app/service/actor.service';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title: string = 'Credit-Create';
  submitBtnTitle: string = 'Create';
  credit: Credit = new Credit();
  movies: Movie[] = [];
  actors: Actor[] = [];
  
  constructor(private creditSvc: CreditService,
              private actorSvc: ActorService,
              private movieSvc: MovieService,
              private router: Router) { }

  ngOnInit() {
    //populate list of movies and list of actors
    this.movieSvc.list().subscribe(
      jRes => {
        this.movies = jRes.data as Movie[];
        console.log(this.movies); 
      });
    console.log("calling all actors!");
    this.actorSvc.list().subscribe(
      jRes => {
        console.log("jRes:", jRes);
        this.actors = jRes.data as Actor[];
        console.log("actors: ", this.actors);
      }); //order does not matter when there is asyncronous calls
  }

  save() {
    this.creditSvc.create(this.credit).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating credit: "+errs);
      }
      this.router.navigateByUrl('/credit/list');
    });
  }
}
