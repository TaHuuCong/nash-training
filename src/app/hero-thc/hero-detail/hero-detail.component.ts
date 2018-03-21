import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'thc-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;  // cho phép component HeroDetailComponent nhận dữ liệu (đối tượng Hero) từ component Hero truyền vào
  constructor() { }

  ngOnInit() {
  }

}
