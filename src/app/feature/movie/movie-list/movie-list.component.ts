import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  title: string = "Movie-List";

  constructor(private movieSvc: MovieService) { }

  ngOnInit() {
    //populate movies
    console.log("a");
    this.movieSvc.list().subscribe(
      jRes => {
        console.log("b");
        this.movies = jRes.data as Movie[];
        console.log(this.movies);
      }
    );
  }
}
