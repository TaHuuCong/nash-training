import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'thc-second-service',
  templateUrl: './second-service.component.html',
  styleUrls: ['./second-service.component.css']
})
export class SecondServiceComponent implements OnInit {

  constructor(
    private numberService: NumberService,
  ) { }

  ngOnInit() {
  }

  clickMe() {
    this.numberService.logging();
  }
}
