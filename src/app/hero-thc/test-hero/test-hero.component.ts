import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'thc-test-hero',
  templateUrl: './test-hero.component.html',
  styleUrls: ['./test-hero.component.css']
})
export class TestHeroComponent implements OnInit {

  constructor(public routerService: Router) { }

  ngOnInit() {
  }

  navigate(url: string) {
    console.log(url);
    setTimeout(() => {
      // this.routerService.navigate([url]);
      this.routerService.navigateByUrl(url);
    }, 1000);
  }

}
