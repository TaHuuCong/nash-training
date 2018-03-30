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
    console.log(this.movies);
  }

  getMovie(id: number) {
    const movie = this.movieService.getInfoMovie(id);
    console.log(movie);
    return movie;
  }

  getIdMovie(id: number) {
    this.id = id;
    console.log(this.id);
  }

}
