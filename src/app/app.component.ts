import { Component } from '@angular/core';

@Component({
  selector: 'thc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Danh sách siêu anh hùng';
  me = 'Công';
  messages: String[] = [];
  message: String = '';

  boo() {
    return 100;
  }


  // khi nhập dữ liệu vào input thì nó chính là message, khi click button thì nó thêm message đó vào mảng
  // messages sau đó lại thiết lập cho message = '' tức là xóa dữ liệu trong input đi
  onClick() {
    this.messages.push(this.message);
    this.message = '';
  }
}
