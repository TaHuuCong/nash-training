import { Component, OnInit, ViewChild, Input, DoCheck } from '@angular/core';
import { Movie } from '../movie';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'thc-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements DoCheck {

  movie: Movie;
  @Input('idMovie') idMovieIn: number;

  constructor(private movieService: MovieService) { }

  ngDoCheck() {
    this.movie = this.movieService.getInfoMovie(this.idMovieIn);
    console.log(this.movie);
  }

  onSaveMovie() {
    this.movieService.updateMovie(this.movie);
  }

}
