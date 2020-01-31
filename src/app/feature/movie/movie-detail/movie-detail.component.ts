import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = 'Movie-Detail';
  movie: Movie;
  id: number;

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

  delete() {
    this.movieSvc.delete(this.id).subscribe(jRes => {
      console.log("movie delete jr:",jRes);
      // Sean owes fix here to jRes.  we will assume delete was successful
      if (jRes.errors != null) {
        console.log("Error deleting movie: "+jRes.errors);
      }
      this.router.navigateByUrl("movie/list");
    });
  }

}
