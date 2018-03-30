import { Component, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'thc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit, AfterViewChecked  {
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

  @ViewChild('prods') prod: ElementRef;

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

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
    // console.log(this.prod);
  }


}
