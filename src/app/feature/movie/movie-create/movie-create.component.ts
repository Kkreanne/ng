import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-movie-create',
  templateUrl: '..//movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title: string = 'Movie-Create';
  submitBtnTitle: string = 'Create';
  movie: Movie = new Movie();

  constructor(private movieSvc: MovieService,
              private router: Router) { }

  ngOnInit() {
    //do nothing
  }

  save() {
    this.movieSvc.create(this.movie).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error creating movie: "+errs);
      }
      this.router.navigateByUrl('/movie/list');
    });
  }

  backClicked() {
    history.back();
  }
}
