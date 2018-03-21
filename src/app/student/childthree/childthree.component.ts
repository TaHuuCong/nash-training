import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thc-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {

  // biến nhận dữ liệu từ input nhập vào
  nameInput: string;
  ageInput: number;
  selected: string;

  // biến truyền ra ngoài
  @Output('myFullName') name = new EventEmitter<string>();
  @Output('myAge') age = new EventEmitter<number>();
  @Output('myCheck') value = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  check(event) {
    this.selected = event.target.value;
  }

  // khi click vào button thì name và age được truyền ra ngoài sẽ nhận giá trị nhập vào
  onSubmit() {
    this.name.emit(this.nameInput);
    this.age.emit(this.ageInput);
    this.value.emit(this.selected);
  }
}
