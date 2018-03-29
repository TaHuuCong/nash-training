import { Component, Input, OnInit, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'thc-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, AfterContentInit, AfterContentChecked  {

  @Input('totalEx') totalIn: number;
  @Input('st1') so1: number;
  @Input('st2') so2: number;

  @ContentChild('valueEx') valueIn: ElementRef;

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log(this.valueIn);
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

}
