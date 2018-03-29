import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thc-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  @Input() checked: Boolean = false;

  // phát ra (emit) sự kiện change cho các component khác sử dụng
  // chú ý: changeXYZZ này khác với change() ở switches.component.html
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
  }

  // EventEmitter.emit() cho phép kích hoạt 1 sự kiện
  // $event sẽ giúp lấy được giá trị của checked (là true hay false) (checked là thuộc tính của input)
  emitChangeValue(event) {
    // event.stopPropagation();
    this.changeValue.emit(event.target.checked);
  }

}
