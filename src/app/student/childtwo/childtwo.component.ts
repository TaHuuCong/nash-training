import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'thc-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  @Input() studentMsg: string;
  @Input('stdLeader') myStdLeader: Student;

  @Output('addNumberEvent') addNumEvent = new EventEmitter<number>();

  childTitle = '---Child Two---';
  addNumMsg = 'Add Number';
  num1: '';
  num2: '';

  addNumber() {
    this.addNumEvent.emit(parseInt(this.num1, 0) + parseInt(this.num2, 0));
  }

  constructor() { }

  ngOnInit() {
  }

}
