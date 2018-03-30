import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'thc-movie-manage',
  templateUrl: './movie-manage.component.html',
  styleUrls: ['./movie-manage.component.css']
})
export class MovieManageComponent implements OnInit {

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
  }

  addMovie(name: string, author: string, link: string) {
    const movie = new Movie(null, name, author, link);
    this.movieService.addMovie(movie);
  }

}
