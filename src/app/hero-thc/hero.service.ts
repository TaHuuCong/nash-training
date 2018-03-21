import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mock-heroes';
import { Hero } from './heroes/hero';

@Injectable()
export class HeroService {

  constructor() { }

  // method này trả về danh sách các hero trong mock-heroes --> cung cấp cho các component khác sử dụng
  getHeros() {
    return HEROES;
  }
  // getHeros(): Hero[] {
  //   return HEROES;
  // }
}
