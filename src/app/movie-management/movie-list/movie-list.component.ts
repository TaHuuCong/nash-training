import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'thc-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  id: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getAllMovie();
    // console.log(this.movies);
  }

  getIdMovie(id: number) {
    this.id = id;
    // console.log(this.id);
  }

  deleteMovie(index: number) {
    this.movieService.deleteMovie(index);
  }

}
