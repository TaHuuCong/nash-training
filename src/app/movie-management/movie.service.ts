import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MovieService {

  movies: Movie[] = [
    new Movie(1, 'Star War', 'cong', 'cong.vn'),
    new Movie(2, 'Skull Island', 'phong', 'phong.vn'),
  ];

  // // nếu khởi tạo theo cách dưới đây thì bên movie.ts phải xóa constructor() đi
  // movies: Movie[] = [
  //   {
  //     id: 1,
  //     name: 'Star War',
  //     author: 'cong',
  //     link: 'cong.vn'
  //   },
  //   {
  //     id: 12,
  //     name: 'Skull Island',
  //     author: 'phong',
  //     link: 'phong.vn'
  //   },
  // ];

  constructor() { }

  // trả về danh sách movie
  getAllMovie() {
    return this.movies;
  }

  // lấy thông tin 1 movie
  getInfoMovie(id: number) {
    return this.movies.find((movie) => movie.id === id);  // find() trả về movie đầu tiên có movie.id === id
  }

  // thêm 1 movie
  addMovie(movie: Movie) {
    movie.id = this.movies.length + 1;
    this.movies.push(movie);  // push(): thêm vào cuối mảng
  }

  // sửa thông tin movie
  updateMovie(updatedMovie: Movie) {  // updatedMovie là movie sau khi sửa
    this.movies.forEach(
      (movie: Movie, index: number) => {  // movie là phần tử hiện tại của mảng được lặp tới, index là chỉ số tương ứng
        if (updatedMovie.id === movie.id) {
          this.movies[index] = updatedMovie;
        }
      }
    );
  }

  // xóa movie
  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    console.log(this.movies);
  }

}
