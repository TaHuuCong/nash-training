import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'thc-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeroesComponent implements OnInit {
  // khai báo thuộc tính hero có kiểu Hero
  hero1: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heroes = HEROES;
  heroes: Hero[];  // 1 mảng các Hero

  selectedHero: Hero;

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  // HeroComponent muốn trả về danh sách các hero, trong HeroService có 1 method như vậy
  // --> class HeroComponent phụ thuộc vào class HeroService
  // --> ta inject 1 instance của HeroService làm tham số đầu vào constructor()

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this.heroes = this.heroService.getHeros();  // hàm này sẽ gọi đến phương thức getHeros() trong HeroService
  }

}
