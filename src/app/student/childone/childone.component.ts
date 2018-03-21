import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'thc-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  @Input() ctMsg: string;

  // myctArray là tên internal --> được dùng trong các file nội bộ: childone.component.html
  // ctArray là định danh external --> dùng trong các file bên ngoài như parent.component.html
  @Input('ctArray') myctArray: Array<string>;
  @Input('studentAddMsg') addMsg: string;


  // bắn ra event addStdEvent
  @Output('addStudentEvent') addStdEvent = new EventEmitter<Student>();
  @Output() sendMsgEvent = new EventEmitter<string>();

  student = new Student();  // là 1 đối tượng Student
  childTitle = '---Child One---';
  message = 'Send Message';
  msg: string;


  // kích hoạt sự kiện addStdEvent, lúc này student đã được gán giá trị cho các thuộc tính con của nó là fname và lname
  addStudent() {
    this.addStdEvent.emit(this.student);
  }

  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
