import {
  Component, Input, OnInit,
  ViewChild, ElementRef, AfterViewInit,
  AfterViewChecked, OnChanges, DoCheck
} from '@angular/core';
import { MovieListComponent } from './movie-management/movie-list/movie-list.component';

@Component({
  selector: 'thc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements DoCheck, AfterViewInit, AfterViewChecked {
  title = 'Danh sách siêu anh hùng';
  me = 'Công';
  messages: string[] = [];
  message: string = '';
  isShow: boolean = true;
  ngContent: string = 'ngContent';

  a: number;
  b: number;
  total: number;

  products: any[] = [
    {
      id: 1,
      name: 'Iphone 7'
    },
    {
      id: 2,
      name: 'Iphone 7 Plus'
    },
    {
      id: 3,
      name: 'Iphone 8'
    }
  ];

  idMovie: number;

  @ViewChild('prods') prod: ElementRef;
  @ViewChild('id') movie: MovieListComponent;

  boo() {
    return 100;
  }

  // khi nhập dữ liệu vào input thì nó chính là message, khi click button thì nó thêm message đó vào mảng
  // messages sau đó lại thiết lập cho message = '' tức là xóa dữ liệu trong input đi
  onClick() {
    this.messages.push(this.message);
    this.message = '';
  }

  clickToggle() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }

  clickSum() {
    this.total = this.a + this.b;
    console.log(this.total);
  }

  clickBind(value) {
    this.ngContent = value;
    console.log(this.ngContent);
  }

  addProduct(value) {
    this.products.push({
      id: this.products.length + 1,
      name: value
    });
    console.log(this.products);
  }

  ngDoCheck() {
    this.idMovie = this.movie.id;
    // console.log(this.idMovie);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
    // console.log(this.prod);
  }


}
