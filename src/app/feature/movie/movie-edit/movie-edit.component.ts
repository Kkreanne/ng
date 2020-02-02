import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '..//movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = 'Movie-Edit';
  submitBtnTitle: string = 'Save';
  movie: Movie = new Movie();
  id: number = 0;

  constructor(private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     //get movie id from url
     this.route.params.subscribe(parms => this.id = parms['id']);
     this.movieSvc.get(this.id).subscribe(jRes => {
       this.movie = jRes.data as Movie; //add error checking
     });
  }

  save() {
    this.movieSvc.edit(this.movie).subscribe(jRes => {
      let errs: string = jRes.errors;
      if (errs!=null) {
        console.log("Error editing movie: "+errs);
      }
      this.router.navigateByUrl('/movie/list');
    });
  }
  backClicked() {
    history.back();
  }
}
