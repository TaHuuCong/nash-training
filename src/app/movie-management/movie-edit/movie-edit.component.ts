import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../movie';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'thc-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;
  @ViewChild('id') aa: MovieListComponent;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie = this.movieService.getInfoMovie(1);
  }

}
