import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'thc-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentTitle = 'Parent Component';

  // Properties for child component one
  cityMsg = 'Viet Nam City Names';
  cityArray = ['Ha Noi', 'Ho Chi Minh', 'Da Nang'];
  stdAddMsg = 'Add Student';

  // Properties for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Tạ', 'Công');

  // Properties for child component three
  nameParent: string;
  ageParent: number;
  checkParent: string;

  // Properties used in parent
  stdFullName = '';
  sum = '';
  msg = '';


  // lưu tên đầy đủ, tham số std truyền vào ở đây sẽ là 1 đối tượng student (có 2 thuộc tính fname và lname)
  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  // in ra sum
  printSum(res) {
    this.sum = res;
  }

  // in ra message
  printMsg(msg) {
    this.msg = msg;
  }

  getNameFromChild(value) {
    this.nameParent = value;
  }

  getAgeFromChild(value) {
    this.ageParent = value;
  }

  getCheckValue(value) {
    this.checkParent = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
