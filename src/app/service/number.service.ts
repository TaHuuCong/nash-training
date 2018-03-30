import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  constructor() { }

  logging(): void {
    console.log('Hello Service!!!');
  }

}
