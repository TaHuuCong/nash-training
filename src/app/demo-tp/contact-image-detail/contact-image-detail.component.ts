import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'thc-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.css']
})
export class ContactImageDetailComponent implements OnInit {

  // round và url sẽ được truyền dữ liệu từ bên ngoài vào nhờ @Input
  @Input() round;
  url = '';

  constructor() {

  }

  get avatarUrl() {
    return this.url;
  }

  // khi đặt @Input ở đây thì cái _avatarUrl được truyền vào sẽ được loại bỏ hết các khoảng trắng ở đầu và cuối nhờ hàm trim()
  @Input('avatar-url') set avatarUrl(value: string) {
    this.url = value.trim();
  }

  ngOnInit() {
    if (!this.url) {
      throw new Error('avatarUrl is required!');
    }
  }
}
