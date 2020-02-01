import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service ';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title: string = 'Credit-Edit';
  submitBtnTitle: string = 'Save';
  credit: Credit = new Credit();
  movies: Movie[] = [];
  actors: Actor[] = [];
  id: number = 0;

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get credit id from url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.creditSvc.get(this.id).subscribe(jRes => {
      this.credit = jRes.data as Credit; //add error checking
    });
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
    this.creditSvc.edit(this.credit).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs != null) {
        console.log("Error editing credit: " + errs);
      }
      this.router.navigateByUrl('/credit/list');
    });
  }

  backClicked() {
    
  }

  compMovie(a: Movie, b: Movie): boolean {  //comparing a movie value that the user selects with somethinge else 
    return a && b && a.id === b.id;         //returns t or f, comparing movie in credit with this option
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }
}
