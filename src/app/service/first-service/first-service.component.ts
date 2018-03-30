import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'thc-first-service',
  templateUrl: './first-service.component.html',
  styleUrls: ['./first-service.component.css']
})
export class FirstServiceComponent implements OnInit {

  constructor(
    private numberService: NumberService,
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.numberService.logging();
  }
}
